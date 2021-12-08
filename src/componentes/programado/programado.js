import React, {useState,useEffect} from 'react';
import MaterialTable from "material-table";
import Cliente from '../cliente/Cliente';
import axios from 'axios';

const columnas=[
    {
        title:'Cliente',
        field:'cliente'
    },
    {
        title:'Servicio',
        field:'servicio'
    },
    {
        title:'Maquina',
        field:'maquina'
    },
    {
        title:'Fecha',
        field:'fecha'
    }
    
];
const url ="http://localhost:3001/progamados"
function Programado() {


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
        peticionesDelete();
    }

    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={data}
            title="Programado"
            detailPanel={rowData => {
                return (
                  <Cliente nombre={rowData.cliente} tel={rowData.tel} email={rowData.email}/>
                )
              }}
            actions={[
                {
                    icon:'edit',
                    tooltip:'editar',
                    onClick:(event,rowData)=>alert('has presionado editar al cliente' + rowData.cliente)
                },
                {
                    icon:'delete',
                    tooltip:'eliminar',
                    onClick:(event,rowData)=>{seleccionarActividad(rowData,"eliminar");}
                }
            ]}
            options={{
                actionsColumnIndex: -1
              }}
            />
        </div>
    )
}

export default Programado