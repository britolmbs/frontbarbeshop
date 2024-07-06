import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";



const localizer = momentLocalizer(moment);

const Calendar = () => {
const [events, setEvents] = useState([]);
const [open, setOpen] = useState(false);
const [selectedEvent, setSelectdEvent] = useState(null);
const [newEvent, setNewEvent] = useState({ title:'', start: new Date(), end: new Date()});

const handleSelectSlot = ({start, end }) =>{
    setNewEvent({ ...newEvent, start, end});
    setOpen(true);
};

const handleSelectEvent = (event) => {
setSelectdEvent(event);
setNewEvent(event);
setOpen(true);
};
const handleClose = () => {
    setOpen(false);
    setSelectdEvent(null);
    setNewEvent({ title: '', start: new Date(), end: new Date()});
};
const handleSave= () => {
    if (newEvent.title.trim() === '') {
        alert('O título não pode estar vazio');
        return;
    }
    if (newEvent.start >= newEvent.end){
        alert('A data de início deve ser anterior á data de termino');
        return;
    }
    if(selectedEvent){
        setEvents(events.map(events => (events === selectedEvent ? newEvent : events)));        
    } else {
        setEvents([...events, newEvent]);
    }
    handleClose();
};
const handleDelete = () => {
    setEvents(events.filter(event => event !== selectedEvent));
    handleClose();
} ;
return (
    <Container>
        <Typography variant="h5" style={{ margin: '20px 0'}}>Calendáro de Disponibilidade</Typography>
         <BigCalendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500}}
        />
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{selectedEvent ? 'Editar Agendamento' : 'Novo Agendamento'}</DialogTitle>
            <DialogContent>
                <TextField
                label="Titulo"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                fullWidth
                margin="normal"
                required
                />
                <TextField
                label="Inicio"
                type="datetime-local"
                value={moment(newEvent.start).format('YYYY-MM_DDTHH:mm')}
                onChange={(e) => setEvents({ ...newEvent, start: new Date(e.target.value)})}
                fullWidth
                margin="normal"
                required
                />
                <TextField
                label="Fim"
                type="datetime-local"
                value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value)})}
                fullWidth
                margin="normal"
                required
                />
            </DialogContent>
            <DialogActions>
                {selectedEvent && <Button onClick={handleDelete} color="secundary">Excluir</Button>}
                <Button onClick={handleClose} color="primary">Cancelar</Button>
                <Button onClick={handleSave} color="primary">Salvar</Button>
            </DialogActions>
        </Dialog>
    </Container>
);
};

export default Calendar;
