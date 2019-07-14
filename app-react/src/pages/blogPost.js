import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class BlogPost extends Component {

    constructor() {
        super();
        this.state = {
            id: 1
            , title: ''
            , date: ''
            , description: ''
            , paragraphs: []
            , comments: []
            , newComment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.save=this.save.bind(this);
    }
    handleChange = event => {
        event.preventDefault();
        const nameInput = event.target.name;
        const valueInput = event.target.value;
        this.setState({
            [nameInput]: valueInput
        });
    }

   save(e){
        console.log('1');
        e.preventDefault();
    
        axios.post(`http://localhost:9000/BlogList/addComments`, {
            id: this.state.id,
            newComment: this.state.newComment
        })
            .then(res => {
                this.setState({newComment: ''})
                
                axios.post(`http://localhost:9000/BlogList/getComments`, {
                    id: this.state.id
                }
                )
                    .then(res => {
                        const c = res.data;
                        this.setState({
                            comments: c[0]
                        });
                    })
            })
    }

    componentDidMount() {

        axios.post(`http://localhost:9000/BlogList/getBlogPostById`, {
            id: this.state.id
        }
        )
            .then(res => {
                const blog = res.data[0][0];
                this.setState({
                    title: blog.title
                    , date: blog.date
                    , description: blog.description
                });

            })

        axios.post(`http://localhost:9000/BlogList/getParagraph`, {
            id: this.state.id
        }
        )
            .then(res => {
                const p = res.data;
                this.setState({
                    paragraphs: p[0]
                });
            })

        axios.post(`http://localhost:9000/BlogList/getComments`, {
            id: this.state.id
        }
        )
            .then(res => {
                const c = res.data;
                this.setState({
                    comments: c[0]
                });
            })
    }
    render() {

        let paragraph = this.state.paragraphs.map((p) => {
            return (

                <p>
                    {p.paragraph}
                </p >
            );
        })

        let comments = this.state.comments.map((c) => {
            return (

                <div className="media mb-4 col-lg-12">
                    <img className="d-flex mr-3 rounded-circle" src={require("../Imagenes/perfil.png")} height="50" />
                    <div className="media-body">
                        <h5 className="mt-0">Usuario Anónimo</h5>
                        {c.comment}
                    </div>
                </div>

            );
        })

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="mt-4">{this.state.title}</h1>
                        </div>

                        <p>Publicado: {this.state.date}</p>


                        <img className="img-fluid rounded" src={require("../Imagenes/blogs/Imagen2.jpg")} />

                        <p className="lead">
                            {this.state.description}
                        </p>

                        {paragraph}

                        <div className="card my-4 col-lg-12">
                            <h5 className="card-header">Deja un Comentario:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" name="newComment" onChange={this.handleChange}></textarea>
                                    </div>
                                    <button onClick={this.save} className="btn btn-primary">Publicar</button>
                                </form>
                            </div>
                        </div>

                        {comments}

                    </div>
                </div>
            </div >
        )
    }
}

export default BlogPost;