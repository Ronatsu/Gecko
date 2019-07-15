import React, { Component } from "react";
import TourCard from '../components/TourCard';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { CustomInput, FormGroup, Label, Col, Row } from 'reactstrap';
import '../pages/Tours.css';
import $ from 'jquery';
import { Accordion, Card, Button, Container } from "react-bootstrap";


class Tour extends Component {
    constructor() {
        super();
        this.state = {
            tour: [
                {
                    name: "playa1",
                    descripcion: "bonito2",
                    lugar: "jaco"
                },
                {
                    name: "playa2",
                    descripcion: "bonito2",
                    lugar: "jaco"
                },
                {
                    name: "playa3",
                    descripcion: "bonito3",
                    lugar: "jaco"
                },
                {
                    name: "playa4",
                    descripcion: "bonito3",
                    lugar: "jaco"
                },
                {
                    name: "playa5",
                    descripcion: "bonito5",
                    lugar: "jaco"
                },
                {
                    name: "playa6",
                    descripcion: "bonito6",
                    lugar: "jaco"
                },
                {
                    name: "playa7",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa8",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa9",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa10",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa11",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa12",
                    descripcion: "bonito",
                    lugar: "jaco"
                },
                {
                    name: "playa13",
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
        $(document).ready(function () {

        });
        this.checkStatus = this.checkStatus.bind(this);
    }

    checkStatus() {
        $("input").on("change", function () {
            if ($(this).is(':checked')) {
                // Hacer algo si el checkbox ha sido seleccionado
                // alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");~
                /*  $('.card').removeClass('d-none');
                  var filter = $(this).val(); // get the value of the input, which we filter on
                  $('.card-deck').find('.cardTour .centrado :not(:contains("' + filter + '"))').parent().parent().addClass('d-none');
                  */
                /*$('.card').removeClass('d-none');
var filter = $(this).val(); // get the value of the input, which we filter on
$('.card').find(".card-title:not(:contains(" + filter + "))").parent().css('display', 'none');
*/
                $('.jj').show();
                var filter = $(this).val().toLowerCase(); // get the value of the input, which we filter on
                //$('.card').find(".card-title:not(:contains(" + filter + "))").parent().css('display', 'none');
                $(".jj").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1)
                });
                /*  alert($(this).val());
                  var filter = $(this).val();
                  $('.card').removeClass('d-none');
                   // get the value of the input, which we filter on
                  $('.card-deck').find('.card .card-body h4:not(:contains("' + filter + '"))').parent().parent().addClass('d-none');
                  */
            } else {

                $('.jj').show();



            }
        });
    }

    render() {
        let tourCards = this.state.tour.map(tour => {
            return (
                <Col sm="4">
                    <TourCard tour={tour} />

                </Col>
            );
        })
        return (
            <div className="container-fluid all">
                <div className="row">
                    <div id="accordion" className="sidebar col-sm-3">
                        <div className="filterText">
                            <strong>Filtros</strong>
                        </div>
                        <div className="card" id="cardID">
                            <div className="card-header" id="CH_ID" data-toggle="collapse" href="#collapseOne">
                                Collapsible Group Item #1
                                </div>
                            <div id="collapseOne" className="collapse show">
                                <FormGroup>
                                    <div className="card-body" id="CB_ID" onChange={this.checkStatus}>
                                        <CustomInput type="radio" id="ecc0" name="customRadio" label="Todos" defaultChecked />
                                        <CustomInput type="radio" id="ecc1" name="customRadio" value="playa1" label="Montaña" />
                                        <CustomInput type="radio" id="ecc2" name="customRadio" value="bonito2" label="Laguna" />
                                        <CustomInput type="radio" id="ecc3" name="customRadio" label="Caminata" />
                                        <CustomInput type="radio" id="ecc4" name="customRadio" label="Rio" />
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="card" id="cardID">
                            <div className="card-header" id="CH_ID" data-toggle="collapse" href="#collapseOne2">
                                Collapsible Group Item #1
                                </div>
                            <div id="collapseOne2" className="collapse show">
                                <FormGroup>
                                    <div className="card-body" id="CB_ID">
                                        <CustomInput type="radio" id="ecc02" name="customRadio" label="Todos" defaultChecked />
                                        <CustomInput type="radio" id="ecc12" name="customRadio" value="playa1" label="Montaña" />
                                        <CustomInput type="radio" id="ecc22" name="customRadio" value="bonito2" label="Laguna" />
                                        <CustomInput type="radio" id="ecc32" name="customRadio" label="Caminata" />
                                        <CustomInput type="radio" id="ecc42" name="customRadio" label="Rio" />
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 ml-auto content" id="cardFilter">
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