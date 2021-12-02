import React from 'react';
import Solicitud from "../solicitud/Solicitud";
import Programado from "../programado/programado";
import Alerta from "../alerta/Alerta";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
    return (
        <div>
            <Link to="/progform"><button className="btn">Programar Nueva</button></Link>
            <Programado/>
            <Link to="/solform"><button className="btn">Solicitar Nueva</button></Link>
            <Solicitud/>
            <Link to="/alertform"><button className="btn">Alerta Nueva</button></Link>
            <Alerta/>
        </div>
    )
}

export default Home
