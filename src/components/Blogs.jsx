import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {

    const {posts, loading} = useContext(AppContext)

    return (
      <div className="w-11/12 max-w-[670px] h-4/5 py-8 flex flex-col gap-y-7 mt-[70px] mb-[70px] justify-center items-center">
        {loading ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                <p className="text-center font-bold text-3xl">Loading</p>
              </div>
        ) : posts.length === 0 ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
        ) : (
          posts.map((post) => (
                <BlogDetails key={post.id} post={post}/>
          ))
        )}
      </div>
    );
}

export default Blogs;

{/* <div key={post.id}>
<h1 className="font-bold text-lg">{post.title}</h1>
<p className="text-sm mt-[4px]">
  By <span className="italic">{post.author}</span> on{" "}
  <span className="underline font-bold">{post.category}</span>
</p>
<p className="text-sm mt-[4px]">
  Posted on <span>{post.date}</span>
</p>
<p className="text-md mt-[14px]">{post.content}</p>
<div className="flex gap-x-3">
  {post.tags.map((tag, index) => (
    <span
      className="text-blue-700 underline font-bold text-xs mt-[5px]"
      key={index}
    >
      {`#${tag} `}{" "}
    </span>
  ))}
</div>
</div> */}