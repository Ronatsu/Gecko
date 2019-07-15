import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../pages/blogs.css';


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
            var imag = postBlog.image;
            var url = require(`../Imagenes/blogs/${imag}`);
            return (

                <div className="col-sm-4">
                    <Link to="/blogPost">
                        <div className="card mb-3">


                            <img class="img-fluid rounded" src={url} />
                            <div className="card-body">
                                <h5>{postBlog.title}</h5>
                                <p className="card-text">{postBlog.description}</p>
                            </div>
                            <div className="card-footer text-muted">Publicado: {postBlog.date}</div>
                        </div>
                    </Link>
                </div >

            );
        })
        return (
            <div className="container" >
                <br />
                <div className="row">

                    {blogs}
                </div>

            </div>
        );
    }
}
export default BlogList;