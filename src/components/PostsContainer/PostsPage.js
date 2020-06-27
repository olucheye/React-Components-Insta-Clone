// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import Data from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  //const [data, setData] = useState(Data);

  return (
    <div className="posts-container-wrapper">
      {/* Data map to return each item in dummy.js */}
      {Data.map((item, index)=>(
         <Post
            key={index}
            post={item}
         />
      ))}
    </div>
  );
};

export default PostsPage;
