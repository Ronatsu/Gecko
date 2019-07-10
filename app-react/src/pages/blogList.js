import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


class BlogList extends Component {
    constructor() {
        super();
        this.state = {
            postList: []
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:9000/BlogList/postList`)
            .then(res => {
                const blogs = res.data;
                this.setState({ postList: blogs[0] });
            })
    }
    render() {
        let blogs = this.state.postList.map((postBlog) => {
            console.log(postBlog.image);
            var url = postBlog.image;
            return (

                <div className="col-sm-4">
                    <Link to="/blogPost">
                    <div className="card mb-3">
                        <img class="img-fluid rounded" src={require("../Imagenes/blogs/Imagen2.jpg")} />
                        <div className="card-body">
                            <h5 className="card-title">  {postBlog.title}</h5>
                            <p className="card-text">{postBlog.description}</p>
                        </div>
                        <div className="card-footer text-muted">Publicado: {postBlog.date}</div>
                    </div>
                </Link>
                </div >
               
            );
    })
    return(
            <div className = "container" >
            <br />
            <div className="row">

                {blogs}
            </div>
               
            </div>
        );
    }
}
export default BlogList;