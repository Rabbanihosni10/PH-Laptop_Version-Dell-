import { useEffect, useState } from "react"
import Post from "./Post"
import './Post.css'
export default function Posts(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className="post">
            <h3>Posts:{posts.length}</h3>
            {
                posts.map(post=> <Post post={post}></Post>)
            }
        </div>
    )
}

/**
 * To Load a Data-
 * 1. Create a state to store the data 
 * 2.Create useEffect with no dependency 
 * 3.Use fetch to load data from API
 */