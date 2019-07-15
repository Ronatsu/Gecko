import React from 'react';
import axios from 'axios';

export default class TravelList extends React.Component {
    state = {
        travels: [],
    };

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/17rvyn').then(res => {
            console.log('Entre Travel');
            console.log(res);
            this.setState({ travels: res.data });
        });
    }

    render() {
        return (<ul> {this.state.travels.map(travel => <li key={travel.NombreTour}>{travel.NombreTour}</li>)} </ul>
    ); 

    }
}