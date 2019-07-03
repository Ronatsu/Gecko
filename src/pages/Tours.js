import React, { Component } from "react";
import TourCard from '../components/TourCard';
import { Container } from "@material-ui/core";
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { CustomInput, FormGroup, Label, Col, Row } from 'reactstrap';
import './Tours.css';
import $ from 'jquery';
import { Accordion, Card, Button } from "react-bootstrap";
import EasyPagination from 'easy-pagination'


class Tour extends Component {
    constructor() {
        super();
        this.state = {
            tour: [
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa",
                    descripcion: "bonito",
                    lugar: "jaco"
                }
            ]
        }
        $(document).ready(function () {
            /*new EasyPagination(document.getElementById('pagination'), {
                totalPage: 2,// required
                range: 5, // default 5
                currentPage: 1, // default 1
                callback: page => {
                  console.log(page)
                },
                prevText: '<', // default '<'
                nextText: '>', // default '>'
             })*/
            
        });
        
    }
    

    render() {
        let tourCards = this.state.tour.map(tour => {
            return (
                <Col sm="3">
                    <TourCard tour={tour} />
                </Col>
            );
        })
        return (
            <div className="container-fluid all">
                <div className="row">
                    <div id="accordion" className=" BGColorAccordion col-sm-3">
                        <div className="TextHeader">
                            <strong>Filtros</strong>
                        </div>
                        <div className="card">
                            <div className="card-header" data-toggle="collapse" href="#collapseOne">
                                Checkboxes
                            </div>
                            <div id="collapseOne" className="collapse show">
                                <div className="card-body">
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" >Montaña</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox2">Laguna</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox3">Caminata</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox4">Rio</CustomInput>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header " data-toggle="collapse" href="#collapseOne2">
                                Checkboxes
                            </div>
                            <div id="collapseOne2" className="collapse show" >
                                <div className="card-body">
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" >Montaña</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox2">Laguna</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox3">Caminata</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox4">Rio</CustomInput>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header " data-toggle="collapse" href="#collapseOne3">
                                Checkboxes
                            </div>
                            <div id="collapseOne3" className="collapse show" >
                                <div className="card-body">
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" >Montaña</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox2">Laguna</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox3">Caminata</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox4">Rio</CustomInput>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 ml-auto content" >
                        <Row >
                            {tourCards}
                        </Row>
                    </div >
                </div>
            </div>
        );
    }
}
export default Tour;

function expandIcon() {
    /* $('#'+state1).on('hidden.bs.collapse', function () {
         return <ExpandMore/>;
       })
       $('#'+state1).on('shown.bs.collapse', function () {
         return <ExpandLess/>;
       })*/
    /*if(!$('#collapseTwo').hasClass('collapse in')){
        return <ExpandMore/>
    }else {
        return <ExpandLess/>
    }*/
}
/*
 <a data-toggle="collapse" data-target="#collapseTwo4">
                            <Label>Checkboxes</Label>
                            <FormGroup>
                                <div className="collapse" id="collapseTwo4">
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" >Montaña</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox2">Laguna</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox3">Caminata</CustomInput>
                                    <CustomInput type="checkbox" id="exampleCustomCheckbox4">Rio</CustomInput>
                                </div>
                            </FormGroup>
                        </a>
*/