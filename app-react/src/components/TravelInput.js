import React from 'react';
import axios from 'axios';

export default class TravelInput extends React.Component {
    state = {
        Num: 5,
        NombreTour: 'ss',
        Descripcion: 'ddd',
        Cantidad: 1,
        PrecioUnitario: 1000,
        PrecioUsuario: 1000,
    };


    handleChange=event=>{
        this.setState({name: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const place = {

            Num: this.state.Num,
            NombreTour: this.state.NombreTour,
            Descripcion: this.state.Descripcion,
            Cantidad: this.state.Cantidad,
            PrecioUnitario: this.state.PrecioUnitario,
            PrecioUsuario: this.state.PrecioUsuario,

        };

        axios.post('https://api.myjson.com/bins', { place }).then(res => {
            console.log('Entre Input Travel');
            console.log(res);
            console.log(res.data);
        });

    };


    render() {
        return (
            <form onSubmit= {this.handleSubmit} >
                <label>Travel Nombew tour:</label>
                <input type="text" name="name" Onchange={this.handleChange}/>
                <button type= "submit">Add</button>
            </form>
        );
    }
}