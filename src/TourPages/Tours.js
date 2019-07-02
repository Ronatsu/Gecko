import React, { Component } from "react";
import TourCard from './TourCard';
import { Container } from "@material-ui/core";
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { CustomInput, FormGroup, Label, Col, Row } from 'reactstrap';
import '../GeneralCSS/TourCss.css';
import $ from 'jquery';
import { Accordion, Card, Button } from "react-bootstrap";


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
            $("#4").click(function () {
                /*$("#5").html(<ExpandLess/>);
              alert("Hello!");*/
            });
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
                    <div className="sidebar col-sm-3 h-100">
                        <div id="accordion">

                            <div class="card header">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                        Collapsible Group Item #1
                                    </a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox" >Montaña</CustomInput>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox2">Laguna</CustomInput>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox3">Caminata</CustomInput>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox4">Rio</CustomInput>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 ml-auto content">
                        <Row>
                            {tourCards}
                        </Row>
                    </div>
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