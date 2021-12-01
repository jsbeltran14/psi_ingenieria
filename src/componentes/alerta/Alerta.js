import React from 'react';
import MaterialTable from "material-table";;

function Alerta() {
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
            title:'Fecha Alerta',
            field:'fechaalerta'
        },
        {
            title:'Cliente',
            field:'cliente'
        }
    ];

    const data=[
        {servicio:'Mantenimiento', fecha:'9/11/20', fechaalerta:'9/10/20', cliente:'Cliente 3'},
        {servicio:'Reparacion', fecha:'11/11/20', fechaalerta:'11/10/20', cliente:'Cliente 2'},
        {servicio:'Revision', fecha:'12/12/20', fechaalerta:'12/11/20', cliente:'Cliente 1'},
        {servicio:'Mantenimiento', fecha:'9/11/20', fechaalerta:'9/10/20', cliente:'Cliente 4'},
        {servicio:'Reparacion', fecha:'11/11/20', fechaalerta:'11/10/20', cliente:'Cliente 5'},
        {servicio:'Revision', fecha:'12/12/20', fechaalerta:'12/11/20', cliente:'Cliente 6'},
        {servicio:'Mantenimiento', fecha:'9/11/20', fechaalerta:'9/10/20', cliente:'Cliente 7'},
        {servicio:'Reparacion', fecha:'11/11/20', fechaalerta:'11/10/20', cliente:'Cliente 8'},
        {servicio:'Revision', fecha:'12/12/20', fechaalerta:'12/11/20', cliente:'Cliente 9'}
    ];
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
