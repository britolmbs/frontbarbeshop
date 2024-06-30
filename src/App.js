import React from "react";
import { BrowserRouter as Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./componests/Login";
import Register from "./componests/Register";
import Calendar from "./componests/Calendar";
import AppointmentForm from "./componests/AppointmentForm";
import AdminPanel from "./componests/AdminPanel";


function App() {
  return (
    <BrowserRouter>
   <Routes>
  
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/calendar" component={Calendar} />
      <Route path="appointment" component={AppointmentForm} />
      <Route path="admin" component={AdminPanel} />
      <Route path="/" exact component={Login} />
   </Routes> 
   </BrowserRouter>
  );
}

export default App;
