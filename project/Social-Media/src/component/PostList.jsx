
import Post from "./Post";
import { useContext } from "react";
import { PostListStore } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";

function PostList () {

  const {postList, addPostFromServer} = useContext(PostListStore);

  const hanldeGetPostsClick = () =>{
    fetch("http://dummyjson.com/posts")
    .then((res) => res.json())
    .then(data =>{
      addPostFromServer(data.posts);
    });
  }


  return (
    <>
    { postList.length === 0 && <WelcomeMsg  onGetPostClick ={hanldeGetPostsClick}></WelcomeMsg>}
    {postList.map((post) =><Post key={post.id} post={post}/>)}
    
         
    </>
  )
}

export default PostList;