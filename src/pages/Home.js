
import React, { useEffect, useState } from 'react'
import '../App.css'

const Home = () => {
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await fetch(POST_URL)
        const data = await response.json()
        setPosts(data)
    }
    useEffect(()=> {
        fetchPosts()
    }, [])
    return (
        <div className="container">
            <h1>Home Page</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
    )
}

export default Home
