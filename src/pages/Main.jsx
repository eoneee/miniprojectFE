import React from "react";
import Navbar from "../redux/componants/navbar/Navbar";
import Mainmap from "../redux/componants/mainmap/maps";
import { useNavigate } from "react-router-dom";



function Main() {

    return (
        <>
            <Navbar />
            <Mainmap />
        </>
    );
}

export default Main;