import React, {useEffect,useState} from 'react';
import MaterialTable from "material-table";
import axios from 'axios';

const columnas=[
    {
        title:'Servicio',
        field:'servicio'
    },
    {
        title:'Maquina',
        field:'maquina'
    },
    {
        title:'Cliente',
        field:'cliente'
    },
    {
        title:'Fecha',
        field:'fecha'
    },
    {
        title:'Estado',
        field:'estado'
    }
];
const url ="http://localhost:3001/solictudes"
function Solicitud() {


    const [data, setData] = useState([]);
    const [acti, setActi] = useState({
        servicio:"",
  maquina:"",
  fecha:"",
  cliente:"",
  tel:"",
  email:"",
  id:""
    });

    const peticionesGet = async() =>{
        await axios.get(url)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        peticionesGet();
    },[])

    const peticionesDelete = async() =>{
        await axios.delete(url+"/"+acti.id)
        .then(response=>{
            setData(data.filter(act=>act.id!==acti.id))
        }).catch(error=>{
            console.log(error);
        })
    }

    const seleccionarActividad=(act,caso)=>{
        setActi(act);
    }

    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={data}
            title="Solicitudes"
            actions={[
                {
                    icon:'edit',
                    tooltip:'editar',
                    onClick:(event,rowData)=>alert('has presionado editar al cliente' + rowData.cliente)
                },
                {
                    icon:'delete',
                    tooltip:'eliminar',
                    onClick:(event,rowData)=>{seleccionarActividad(rowData,"eliminar");console.log(rowData.id);peticionesDelete();}
                }
            ]}
            options={{
                actionsColumnIndex: -1
              }}
            />
        </div>
    )
}

export default Solicitud
