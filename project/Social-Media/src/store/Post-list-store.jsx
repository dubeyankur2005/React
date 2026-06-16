import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postList:[],
  addPost:() =>{},
  deletePost:() =>{}
});

const postListReducer = (currPostList, action) =>{
  return currPostList;
}

const PostListStoreProvider =({children})=>{

  const[postList , dispatch] = useReducer(postListReducer, DEFAULT_POST_LIST)

  const addPost =() =>{}

  const deletePost= ()=>{}

  return <PostListStore.Provider value={{postList, addPost, deletePost}}>
     {children}
  </PostListStore.Provider>


}

const DEFAULT_POST_LIST =[{
  id:"1",
  title:"Going to School",
  body:"Hii  friend i am going to school for study. Hop to enjoy and study a lot. Peace out.",
  reactions: "10000",
  userId:"",
  tags:["enjoying" ,"study", "hardwork"]

},
{
id:"2",
  title:"Going to Mumbai",
  body:"Hii  friend i am going to Mumbai for my vacation. Hop to enjoy a lot. Peace out.",
  reactions: "10000",
  userId:"",
  tags:["enjoying" ,"vacation", "fun"]

},
{
  id:"3",
  title:"Going to Dubai",
  body:"Hii  friend i am going to Mumbai for my vacation. Hop to enjoy a lot. Peace out.",
  reactions: "10000",
  userId:"",
  tags:["enjoying" ,"vacation", "fun"]
}


]
export default PostListStoreProvider;