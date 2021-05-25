import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Comment from './components/Comment/comment'
import './App.css';



const App = ()=> {
  const [commentObj,setCommentObj] = useState([{'id':'1','comment':'this is my first comment','ChildComments' : [{'id':'2','comment':'this is my first comment Child','ChildComments' : [{'id':'3','comment':'this is my first comment child child','ChildComments' : []}]}]}]);
  let Obj = commentObj;


  const addComment = (id,txt)=>{
//API call will go here
  }


  const editComment = (id,txt)=>{
//API call will go here

  }


  return (
    <div className="App">
      <Comment commentObj = {commentObj} editComment = {editComment}  addComment = {addComment}/>
    </div>
  );
}

export default App;
