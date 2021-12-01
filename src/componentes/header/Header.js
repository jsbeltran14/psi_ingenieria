import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header__container">
            <div>
            <Link to="/"><h1>PSI</h1></Link>
            </div>
            <div className="info__container">
                <Link to="programadas"><h3>Programado</h3></Link>
                <Link to="solicitudes"><h3>Solicitudes</h3></Link>
                <Link to="alerts"><h3>Alertas</h3></Link> 
            </div>
        </div>
    )
}

export default Header
