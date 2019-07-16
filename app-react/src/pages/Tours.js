import React, { Component } from "react";
import TourCard from '../components/TourCard';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { CustomInput, FormGroup, Label, Col, Row } from 'reactstrap';
import '../pages/Tours.css';
import $ from 'jquery';
import axios from 'axios';
import { Accordion, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



class Tour extends Component {
    constructor() {
        super();
        this.state = {
            tour: [],
            sum: 0,
            allLocation: [],
            allServices: []
        }
        this.checkStatus = this.checkStatus.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:9000/BlogList/getTour`)
            .then(res => {
                const tourBD = res.data;
                this.setState({ tour: tourBD[0] });
            })

        axios.get(`http://localhost:9000/BlogList/getAllServices`)
            .then(res => {
                const service = res.data;
                this.setState({ allServices: service[0] });
            })

        axios.get(`http://localhost:9000/BlogList/getAllLocation`)
            .then(res => {
                const location = res.data;
                this.setState({ allLocation: location[0] });
            })
    }

    checkStatus() {
        $("input").on("change", function () {
            if ($(this).is(':checked')) {

                var filter = $(this).val().toLowerCase();
                if (filter != 'on'.toLowerCase()) {
                    $(".jj").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1)
                    });
                } else {
                    $('.jj').show();
                }
            }
        });
    }

    render() {
        let tourCards = this.state.tour.map((tour) => {
            console.log(tour)
            return (

                <Col sm="4">
                    <Link to={'/infoTour/'+tour.TOUR_id}>
                        <TourCard tour={tour} />
                    </Link>
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
                                Ubicacion
                            </div>
                            <div id="collapseOne" className="collapse show">
                                <FormGroup>
                                    <div className="card-body" id="CB_ID" onChange={this.checkStatus}>
                                        <CustomInput type="radio" id="ecc0" name="customRadio" label="Todos" defaultChecked />
                                        {this.state.allLocation.map(locatio => {
                                            return (
                                                <CustomInput type="radio" id={locatio.location} name="customRadio" value={locatio.location} label={locatio.location} />
                                            )
                                        })}
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
                                    <div className="card-body" id="CB_ID" onChange={this.checkStatus} >
                                        <CustomInput type="radio" id="ecc02" name="customRadio" label="Todos" defaultChecked />
                                        {this.state.allServices.map(servi => {
                                            return (
                                                <CustomInput type="radio" id={servi.service} name="customRadio" value={servi.service} label={servi.service} />
                                            )
                                        })}
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