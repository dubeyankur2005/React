function WelcomeMsg ({onGetPostClick}){


  return (
  <>
  <center> 
    <h1> There is No Post </h1>

    <button type="button" 
    class="btn btn-danger"
    onClick={onGetPostClick}
    
    >
      Get Post From Server</button>
  </center>
  </>
  );
}

export default WelcomeMsg;