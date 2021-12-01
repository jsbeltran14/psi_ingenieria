import Home from "./componentes/Home/Home";
import Header from "./componentes/header/Header";
import Solicitud from "./componentes/solicitud/Solicitud";
import Programado from "./componentes/programado/programado";
import Alerta from "./componentes/alerta/Alerta";
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
      </Routes>

    </Router>
  );
}

export default App;
