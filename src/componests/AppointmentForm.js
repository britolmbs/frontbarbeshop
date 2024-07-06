import { Button, Container, Grid, makeStyles, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { addAppointment } from "../redux/appointmentSlice";

const useStyles = makeStyles((theme) => ({
    Container: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
    },
    Form: {
        marginTop: theme.spacing(2),
    },
    Button: {
        marginTop: theme.spacing(2),
    },
}));

const AppointmentForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch ();
    const [ appointment, setAppointment] = useState({ title: '', start: '', end: '', discription: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment({ ...appointment, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!appointment.title || !appointment.start || !appointment.end) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }
        if (new Date(appointment.start) >= new Date(appointment.end)){
            alert('A data de início deve ser anterio a data de témino');
            return;
        }
        dispatch(addAppointment(appointment));
        setAppointment({ title: '', start: '', end: '', discription: ''});
    };

    return(
        <Container maxWidth="sm">
            <Paper className={classes.container}>
                <Typography variant="h5">Agendar</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            label="Título"
                            name="title"
                            value={appointment.title}
                            onChange={handleChange}
                            fullWidth
                            required
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                label="Inicio"
                                name="start"
                                type="datetime-local"
                                value={appointment.start}
                                onChange={handleChange}
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}               
                                />
                                <Grid item xs={12}>
                                    <TextField
                                    label="Fim"
                                    name="end"
                                    type="datetime-local"
                                    value={appointment.end}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        shrink : true,
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    label="Discrição"
                                    name="description"
                                    value={appointment.discription}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    />
                                </Grid>
                                                 </Grid>
                                                 <Button
                                                 type="submit"
                                                 variant="contained"
                                                 color="primary"
                                                 className={classes.button}
                                                 >Agendar</Button>
                                                                         
                    </Grid>
                </form>
            </Paper>
        </Container>
    );

};

export default AppointmentForm;