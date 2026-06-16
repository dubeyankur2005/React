function Sidebar(props) {

  const handleOnClick =(tabName)=>{
    props.setSelectedTab(tabName)


  }
  return (
    <>
    
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li 
          onClick={() =>{handleOnClick("Home")}}
          className="nav-item">
            <a href="#" className={`nav-link text-black  ${props.selectedTab ==="Home" && "active"}`}>
              Home
            </a>
          </li>

          <li onClick={()=>{handleOnClick("Create Post")}}>
            <a href="#" className={`nav-link  ${props.selectedTab ==="Create Post" && "text-white active"}`}>
              Create Post
            </a>
          </li>
        </ul>
      </div>
     
    </>
  );
}

export default Sidebar;