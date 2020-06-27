import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

  const [comments, setComments] = useState(props.comments);

  //new handlecomment function
  const handleNewComment = e => {
     e.preventDefault();
     let newComment = e.target.value;
   //   console.log(newComment);
     setComments(comments.push(newComment));
  }

  return (
    <div>
      {/* passing dummy comment to comment component */}
      {comments.map((comment, index) => (
         <Comment 
            key={index}
            comment={comment} 
         />
      ))}
      
      <CommentInput
         onSubmit={handleNewComment}
      />
    </div>
  );
};

export default CommentSection;
