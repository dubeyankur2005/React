import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postList:[],
  addPost:() =>{},
  addPostFromServer :()=>{},
  deletePost:() =>{}
});

const postListReducer = (currPostList, action) =>{
  let newPostList = currPostList;

  if(action.type === "ADD_POST"){
    newPostList =[action.payload, ...currPostList]
  }

  else if(action.type ==="ADD_POST_FROM_SERVER"){
    newPostList = action.payload.posts;
  }


  return newPostList;


}

const PostListStoreProvider =({children})=>{

  const[postList , dispatch] = useReducer(postListReducer, [])

  const addPost =(userId, postTitle, postContent, tags) =>{
    dispatch({
      type :"ADD_POST",
      payload:{
        id:Date.now(),
        title:postTitle,
        body:postContent,
        userId:userId,
        tags:tags
      }

    })
  }

  const addPostFromServer =(posts) =>{
    dispatch ({
      type: "ADD_POST_FROM_SERVER",
      payload:{
        posts:posts
      }

    })

  }

  const deletePost= ()=>{}

  return <PostListStore.Provider value={{postList, addPost, deletePost,addPostFromServer}}>
     {children}
  </PostListStore.Provider>


}

export default PostListStoreProvider;