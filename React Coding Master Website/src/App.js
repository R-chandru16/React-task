import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Chess from "./Maincontent/Chess/Chess";
import FootBall from "./Maincontent/FootBall/FootBall";
import VolleyBall from "./Maincontent/VolleyBall/VolleyBall";
import TableTennis from "./Maincontent/TableTennis/TableTennis";
import Rugby from "./Maincontent/Rugby/Rugby";
import { Login } from "./Login/Login";
import Home from "./Maincontent/Home/Home";
import { useState } from "react";
import Sidebar from "./components/Sidebar";










function App() {

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <>

            <Router>
                <Routes>
                    <Route
                        exact
                        path="Navbar"
                        element={loggedIn ? <Navbar /> : <Navigate replace to={"/"} />}
                    />






                    <Route path="/home" exact element={<Home />} />
                    <Route path="/Chess" element={<Chess />} />
                    <Route path="/FootBall" element={<FootBall />} />
                    <Route path="/TableTennis" element={<TableTennis />} />

                    <Route path="/Volleyball" element={<VolleyBall />} />
                    <Route path="/Rugby" element={<Rugby />} />
                    <Route path="/login" element={<Login />} />


                </Routes>


            </Router>





            {/* <BrowserRouter>
                <Navbar />

              

            </BrowserRouter> */}
        </>
    );
}

export default App;
