import React, { Component } from 'react';
import axios from 'axios';

class AddMedicalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tourName: "volcan"
            , description: "volcan poas"
            , tours: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* handleSubmit = event => {
         fetch("http://localhost:9000/MedicalInfo/addMedicalInfo", {
             method: "post",
             body: JSON.stringify(this.state),
 
             headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json"
             }
         })
             .then(res => res.json())
             .then(data => {
                 console.log(data);
             })
             .catch(err => console.error(err));
         event.preventDefault();
     }
 
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
*/



   handleSubmitGEt = event => {
        event.preventDefault();
        axios.get(`http://localhost:9000/MedicalInfo/getTours`)
            .then(res => {
                const tours = res.data;
                //this.setState({ tours });
                this.state.tours=tours;
                console.log(this.state.tours);
            })
    }


    handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:9000/MedicalInfo/addMedicalInfo`, {
            tourName: this.state.tourName,
            description: this.state.description,

        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
}

    render() {
        return (
            <div className="container">
                <div className="row card mt-4 p-5">
                    <div className="col-12">
                        <h1 className="text-left colorBlue">Formulario médico</h1>
                        <div className="row">
                            <div className="col-4 offset-1 text-ceter">
                                <label className="form-control">Tour: {this.state.tours}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 offset-1 mt-4 text-center">
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                            <div className="col-4 offset-9 mt-4">
                                <button align="left" name="save" type="submit" className="buttonSizeGeneral"  >post</button>
                                <button align="left" name="save" type="submit" className="buttonSizeGeneral" onClick={this.handleSubmitGEt} >get</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddMedicalForm;
