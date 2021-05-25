import React, { useState, useEffect } from "react";

import './comment.css';



const Comment = (props)=> {

  const [showInput,setShowInput] = useState(false)
  const [showChild,setShowChild] = useState(false)
  const [input,setInput] = useState('')

  const handleInput = (isReply,txt)=>{
    if(!isReply){
      setInput(txt)
    }
    if(showInput===true){
      setShowInput(false)
    }
    else{
      setShowInput(true)
    }
  }
  const handleChild = ()=>{
    if(showChild===true){
      setShowChild(false)
    }
    else{
      setShowChild(true)
    }
  }

  return (
    <div className="comments">
      {props.commentObj.map((data,i)=>{
        return <div className="comment">
                    <div className="comment">
                        <span>comment_id : {data.id}</span>
                        <span>comment: {data.comment}</span>
                        <div className="actions">
                          <span className="reply" onClick={()=>handleInput(true,input)}>Reply</span>
                          <span className="show" onClick={handleChild}>Show more</span>
                          <span className="edit" onClick={()=>handleInput(false,data.comment)}>edit</span>
                        </div>

                        {showInput===true ? <div className="comment-box"><input className="enter-comment" value = {input} onChange = {(e)=>setInput(e.target.value)}/><span className="post" onClick={()=>props.addComment(data.id,input)}>Save</span> </div>: null}
                      </div>

                    {showChild===true ? <div className="child-comments">
                        <Comment commentObj = {data.ChildComments} editComment = {props.editComment} addComment = {props.addComment} />
                    </div> : null}
               </div>
      })}

    </div>
  );
}

export default Comment;
