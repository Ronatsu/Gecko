import { Table, Button } from 'reactstrap';
import React from 'react';

const TableShopping = (props) => {

  var sale = 0;
  sale = props.quantity * props.price;
  return (
    <li>
      <span> name: {props.children}, description:{props.description}, quantity:{props.quantity}, price unit:{props.price}, price sale:{sale} </span>
      <button onClick={props.delEvent}>eliminar</button>
    </li>
  );
}

export default TableShopping;





