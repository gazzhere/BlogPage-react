import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import  './Blog.css' 
function Blog() {
  const { posts, laoding } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] ">
      {laoding ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No post Found</div>
      ) : (
        (posts.map((posts)=>(
          <div key={posts.id}>
          <p className="font-bold text-lg ">{posts.title}</p>
          <p className="text-sm mt-[4px]">
            by <span className="italic">{posts.author}</span> on <span className="underline font-bold">{posts.category}</span>
          </p>
          <p className="text-sm mt-[5px]">Posted in {posts.date}</p>
          <p className="text-md mt-[10px]">{posts.content}</p>
          <div className="flex gap-x-3">
            {posts.tags.map((tag,index) => {
              return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px] "> {`#${tag}`} </span>;
            })}     
          </div>
          </div>
        ))
      ))}
    </div>
  );
}

export default Blog;
