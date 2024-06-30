import { Button, Container, TextField, Typography } from "@mui/material";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from '../redux/authSlide';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async(e)=> {
        e.prventDefault();
        dispatch(loginUser(email, password));
        
    };
    return (
       <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
            Login
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <TextField 
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
            </Button>
        </form>
       </Container>
    );

};
export default Login;