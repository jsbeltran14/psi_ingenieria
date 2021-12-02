import Home from "./componentes/Home/Home";
import Header from "./componentes/header/Header";
import Solicitud from "./componentes/solicitud/Solicitud";
import Programado from "./componentes/programado/programado";
import Alerta from "./componentes/alerta/Alerta";
import ProgramadoForm from "./componentes/forms/ProgramadoForm";
import SolicitudForm from "./componentes/forms/SolicitudForm";
import AlertasForm from "./componentes/forms/AlertasForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/programadas' element={<Programado/>} />
        <Route path='/solicitudes' element={<Solicitud/>} />
        <Route path='/alerts' element={<Alerta/>} />
        <Route path='/progform' element={<ProgramadoForm/>} />
        <Route path='/solform' element={<SolicitudForm/>} />
        <Route path='/alertform' element={<AlertasForm/>} />
      </Routes>

    </Router>
  );
}

export default App;
