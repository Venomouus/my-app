/* eslint-disable no-unused-vars */
import axios from "axios"
import blogFetch from "../axios/config"
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await blogFetch.get(
                "/api/report/v1"
            )
            const data = response.data.data
            console.log(data);

            setPosts(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
    <div className="home">
        <h1>Data</h1>
        {posts.length === 0 ? <p>Carregando</p> : (
            posts.map((post) => (
                <div className="post" key={post.uid} >
                    <h2>{post.uf}</h2>
                    <p>{post.state}</p>
                    <Link to={`/posts/${post.uid}`} className="btn">Ler mais</Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home