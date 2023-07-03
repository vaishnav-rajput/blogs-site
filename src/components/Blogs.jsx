import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

    const {posts} = useContext(AppContext)

    return(
        <div>
                {
                posts.length === 0 ? 
                (<div>No Posts Found</div>) :
                (
                    posts.map((post) => (
                        <div key={post.id}>
                            <h1>
                            {post.title}</h1>
                            <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                            <p>Posted on <span>{post.date}</span></p>
                            <p>
                                {post.content}
                            </p>
                            {
                                (post.tags).map((tag,index) => (
                                    <span key={index}>{`#${tag} `} </span>
                                ))
                            }
                        </div>

                    ))
                ) 
            }
            
        
        </div>
    )
}

export default Blogs;