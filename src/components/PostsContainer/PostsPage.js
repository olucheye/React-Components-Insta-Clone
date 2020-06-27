//Complete the necessary code in this file
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
      {/* map through data here to return a Post and pass data as props to Post */}
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
