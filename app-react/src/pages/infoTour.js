import React, { Component } from "react";
import axios from 'axios';

class BlogList extends Component {
    constructor() {
        super();
        this.state = {
            tour: {}
            , price: '15000'
            , name: ''
            , services: []
            , description: ''
            , images: []
            , id: 13
        }

    }
    addTravel = () => {
        console.log('Add travel');

        const newItem = {
            id: this.nextUniqueId(), name: 'Casa de Ronny', description: 'SR', quantity: 1, price: 3600
        };

        this.setState({ travels: this.state.travels.concat(newItem) })

    }

    componentDidMount() {
        axios.post(`http://localhost:9000/Tour/getTourById`, {
            id: this.state.id
        })
            .then(res => {
                const tour = res.data[0][0];
                this.setState({
                    name: tour.nameTour
                    , description: tour.DescriptionTour
                });
            })

        axios.post(`http://localhost:9000/Tour/getServicesById`, {
            id: this.state.id
        })
            .then(res => {
                console.log(res.data[0])
                this.setState({
                     services: res.data[0]
                 });
            })
    }
    render() {
        let services = this.state.services.map((service) => {
            return (

                <div>
                    <li>{service.service}</li>
                </div >
            );
        })

        return (
            <div className="container" >
                <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <img class="img-fluid rounded" src={require("../Imagenes/blogs/Imagen1.jpg")} />
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <h3>{this.state.name}</h3>
                        </div>
                        <div className="row">
                            <h5>Precio: </h5> {this.state.price}
                        </div>
                        cantidad:
                        <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                
                    </div>
                    <button onClick={this.addTravel.bind(this)} class="btn btn-primary"> add travel </button>
                    <br/>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Descripción</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Servicios</a>
                            </li>

                        </ul>
                    </div>
                    <br />
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <br />
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> {this.state.description} </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> {services} </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default BlogList;