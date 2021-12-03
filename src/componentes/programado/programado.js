import React from 'react';
import MaterialTable from "material-table";
import Cliente from '../cliente/Cliente';

function Programado() {

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

    const data=[
        {servicio:'Mantenimiento', maquina:'Ensambladora gotero', fecha:'9/11/20', cliente:'Cliente 3', tel:3107658745, email:"cliente3@gmail.com"},
        {servicio:'Reparacion', maquina:'Ensamble unidad de cierre', fecha:'11/11/20', cliente:'Cliente 2', tel:3107999745, email:"cliente2@gmail.com"},
        {servicio:'Revision', maquina:'Ensambladora gotero', fecha:'12/12/20', cliente:'Cliente 1', tel:3745858745, email:"cliente1@gmail.com"},
        {servicio:'Mantenimiento', maquina:'Ensamble unidad de cierre', fecha:'9/11/20', cliente:'Cliente 4', tel:2107658745, email:"cliente4@gmail.com"},
        {servicio:'Reparacion', maquina:'Ensamble unidad de cierre', fecha:'11/11/20', cliente:'Cliente 5', tel:6547658745, email:"cliente5@gmail.com"},
        {servicio:'Revision', maquina:'Ensambladora gotero', fecha:'12/12/20', cliente:'Cliente 6', tel:9877658745, email:"cliente6@gmail.com"},
        {servicio:'Mantenimiento', maquina:'Ensambladora gotero', fecha:'9/11/20', cliente:'Cliente 7', tel:3247658745, email:"cliente7@gmail.com"},
        {servicio:'Reparacion', maquina:'Ensambladora gotero', fecha:'11/11/20', cliente:'Cliente 8', tel:3545658745, email:"cliente8@gmail.com"},
        {servicio:'Revision', maquina:'Ensamble unidad de cierre', fecha:'12/12/20', cliente:'Cliente 9', tel:3354658745, email:"cliente9@gmail.com"}
    ];

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