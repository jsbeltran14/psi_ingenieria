import React from 'react';
import Solicitud from "../solicitud/Solicitud";
import Programado from "../programado/programado";
import Alerta from "../alerta/Alerta";

function Home() {
    return (
        <div>
            <Programado/>
            <Solicitud/>
            <Alerta/>
        </div>
    )
}

export default Home
