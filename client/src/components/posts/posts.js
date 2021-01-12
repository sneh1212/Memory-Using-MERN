import React from "react";
import {useSelector} from "react-redux";
import Post from "./post/post"
import UseStyles from "./style";
const Posts = function(){

    const posts= useSelector((state)=> state.posts);
        
    
    console.log(posts);

    const classes = UseStyles();

    return(
    <>
    <h1>Posts</h1>
          <Post />
          <Post />
    </>
    
    );

}
export default Posts;