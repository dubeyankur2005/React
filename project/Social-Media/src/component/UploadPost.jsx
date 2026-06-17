import { useContext, useRef } from "react";
import { PostListStore } from "../store/Post-list-store";


function UploadPost( {setSelectedTab} ) {

  const {addPost} = useContext(PostListStore)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const tagsElement = useRef();



  const hanldeSubmit =(event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const tags = tagsElement.current.value.split(" ");


    addPost(userId, postTitle, postContent, tags);
    
    userIdElement.current.value ="",
    postTitleElement.current.value="",
    postContentElement.current.value = "",
    tagsElement.current.value =""

    setSelectedTab("Home")
  }





  return (
    <>
      <form  onSubmit={hanldeSubmit}>
        <div class="mb-3">
          <label class="form-label">
           Enter your User Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            class="form-control"
            id="User Id"
            placeholder="Your User Id"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            class="form-control"
            id="Post Title"
            placeholder="How are you felling today..."
          />
        </div>

        <div class="mb-3">
          <label class="form-label">
            Post Content
          </label>
          <textarea
            type ="text"
            ref={postContentElement}
            row ="8"
            class="form-control"
            id="Post Content"
            placeholder="Tell us more about it.."
          />
        </div>


        <div class="mb-3">
          <label class="form-label">
            tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            class="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>


      
    
        <button 
        type="submit"
        class="btn btn-primary"
        
        
        >
          Post
        </button>
      </form>
    </>
  );
}

export default UploadPost;
