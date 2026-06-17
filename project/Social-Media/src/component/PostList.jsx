
import Post from "./Post";
import { useContext } from "react";
import { PostListStore } from "../store/Post-list-store";

function PostList () {

  const {postList} = useContext(PostListStore);


  return (
    <>
    {postList.map((post) =><Post key={post.id} post={post}/>)}
    
         
    </>
  )
}

export default PostList;