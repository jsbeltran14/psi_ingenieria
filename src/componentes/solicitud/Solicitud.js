import React from 'react';
import MaterialTable from "material-table";

function Solicitud() {

    const columnas=[
        {
            title:'Servicio',
            field:'servicio'
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

    const data=[
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 3', estado:'Pendiente'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 2', estado:'Cancelado'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 1', estado:'Pendiente'},
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 4', estado:'Pendiente'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 5', estado:'Cancelado'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 6', estado:'Pendiente'},
        {servicio:'Mantenimiento', fecha:'9/11/20', cliente:'Cliente 7', estado:'Pendiente'},
        {servicio:'Reparacion', fecha:'11/11/20', cliente:'Cliente 8', estado:'Cancelado'},
        {servicio:'Revision', fecha:'12/12/20', cliente:'Cliente 9', estado:'Pendiente'}
    ];

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

export default Solicitud
