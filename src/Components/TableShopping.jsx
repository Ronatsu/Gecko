import { Table, Button } from 'reactstrap';
import React from 'react';

export default function TableShopping(props) {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Tour</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Usuario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            props.carrito.map(row => ( 
              <tr>
                <td> {row.Num} </td>
                <td> {row.NombreTour} </td>
                <td> {row.Descripcion} </td>
                <td> {row.Cantidad} </td>
                <td> {row.PrecioUnitario} </td>
                <td> {row.PrecioUsuario} </td>
                <td><Button color="warning">Remover</Button>{' '}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
     
    );
  }



 

