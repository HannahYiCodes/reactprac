import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "../Auth/Login";
import Container from "../common/Container";
import Home from "../Home/Home";
import Self from "../Student/Self";
import Students from "../Student/Students";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {

    // Home
    // Login
    // Students
    // MyPage
    // Sign up
    // Teacher

    return (
        <Container>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Self/>}/>
                <Route path="/students" element={<Students/>}/>
            </Routes>

        </Container>
    )
}

export default AppRouter;