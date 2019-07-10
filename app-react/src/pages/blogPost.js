import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BlogPost extends Component {

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="mt-4">CAMINANDO ENTRE MONTAÑAS</h1>
                        </div>

                        <p>Posted on January 1, 2019 at 12:00 PM</p>


                        <img class="img-fluid rounded" src={require("../Imagenes/blogs/Imagen2.jpg")}/>

                        <p class="lead">
                            Es importante saber que hacer en caminatas largas en montañas, carreteras y lugares accidentados.
                            </p>

                        <p>
                            Una de las tantas cosas que hay que tener en cuenta antes de hacer una caminata, es el lugar donde irás y los msnm donde estarás ya que esos factores dependerá mucho de lo que tendrás que llevar para un trekking.
                        </p>

                        <p>
                            Ya se por un día entero o si piensas acampar en la ruta del trekking. tienes que llevar consigo lo importante y necesario para que tu mochila no sea muy pesada.
                        </p>

                        <p>
                            Aquí les mostrare seis consejos muy eficaces al hacer una caminata.
                        </p>
                        <ul>
                            <li>Llevar ropa muy ligera y mínimo un cambio porque al transpirar puedes enfermarte.</li>
                            <li>Antes de hacer una ruta alta es recomendable primero adaptarse al clima por unas horas.</li>
                            <li>Tener en el camino frutas, de preferencia los plátanos, son ricas en potasio y ayuda mucho a no tener calambres.</li>
                            <li>Tener bien en cuenta la Orientación para no perderse, más seguridad usar una brújula.</li>
                            <li>Llevar envases con agua para hidratarse en el camino muy importante.</li>
                            <li>Tomar fotografías de cada punto así será como una huella por si te desorientas.</li>
                        </ul>

                        <div class="card my-4 col-lg-12">
                            <h5 class="card-header">Deja un Comentario:</h5>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Publicar</button>
                                </form>
                            </div>
                        </div>

                        <div class="media mb-4">
                            <img class="d-flex mr-3 rounded-circle" src={require("../Imagenes/perfil.png")} height="50"/>
                            <div class="media-body">
                                <h5 class="mt-0">Usuario Anónimo</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>

                        <div class="media mb-4">
                        <img class="d-flex mr-3 rounded-circle" src={require("../Imagenes/perfil.png")} height="50"/>
                            <div class="media-body">
                                <h5 class="mt-0">Usuario Anónimo</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>









                    </div>
                </div>
            </div >
        )
    }
}

export default BlogPost;