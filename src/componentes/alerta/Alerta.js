import React, {useEffect,useState}from 'react';
import MaterialTable from "material-table";
import axios from 'axios';

const columnas=[
    {
        title:'Servicio',
        field:'servicio'
    },
    {
        title:'Fecha',
        field:'fecha'
    },
    {
        title:'Cliente',
        field:'cliente'
    }
];
const url ="http://localhost:3001/solictudes"
function Alerta() {

    const [data, setData] = useState([]);

    const peticionesGet = async() =>{
        await axios.get(url)
        .then(response=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        peticionesGet();
    },[])

  
    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={data}
            title="Alertas"
            actions={[
                {
                    icon:'check',
                    tooltip:'enviar recordatorio',
                    onClick:(event,rowData)=>window.confirm('Seguro que deseas enviar el recordatorio a ' + rowData.cliente)
                }
            ]}
            options={{
                actionsColumnIndex: -1
              }}
            />
        </div>
    )
}

export default Alerta
