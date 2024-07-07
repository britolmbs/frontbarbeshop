import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { logout } from '../redux/authSlice';
import { Button, Container, Typography } from "@mui/material";
import Calendar from "./Calendar";
const AdminPanel= () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Painel Administrativo
            </Typography>
            <Button onClick={handleLogout} variant="contained" color="secondary" sx={{ mb: 3}}>
                Sair
            </Button>
            <Calendar />
        </Container>
    );
};
export default AdminPanel;