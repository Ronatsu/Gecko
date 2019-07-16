import React, { Component } from "react";
import axios from 'axios';

class BlogList extends Component {
    constructor() {
        super();
        this.state = {
            tour: {}
            , price: ''
            , name: ''
            , services: []
            , description: ''
            , images: []
            ,id:13
        }

    }

    componentDidMount() {
        axios.post(`http://localhost:9000/Tour/getTourById`,{
            id: this.state.id
        })
            .then(res => {
                alert(res.data);
                const tour = res.data[0][0];
                console.log(res.data);
                this.setState({ name : tour });
            })
    }
    render() {
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
                            <h5>Precio: </h5>
                        </div>
                        cantidad:

                        <div className="row">


                            <div class="dropdown">
                                <button class="btn btn-md dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="1">
                                    1</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item " value="1">1</a>
                                    <a class="dropdown-item" value="2">2</a>
                                    <a class="dropdown-item" value="3">3</a>
                                    <a class="dropdown-item" value="4">4</a>
                                    <a class="dropdown-item" value="5">5</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <br />
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> descripcion </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> servicios </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default BlogList;