import React from 'react';
import MaterialTable from "material-table";

function Programado() {

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

    const data=[
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 3'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 2'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 1'},
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 4'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 5'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 6'},
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 7'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 8'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 9'}
    ];

    return (
        <div>
            <MaterialTable
            columns={columnas}
            data={data}
            title="Programado"
            actions={[
                {
                    icon:'edit',
                    tooltip:'editar',
                    onClick:(event,rowData)=>alert('has presionado editar al cliente' + rowData.cliente)
                },
                {
                    icon:'delete',
                    tooltip:'eliminar',
                    onClick:(event,rowData)=>window.confirm('Seguro que deseas eliminar al cliente ' + rowData.cliente)
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