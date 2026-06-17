import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import PostList from "./component/PostList";
import UploadPost from "./component/UploadPost";
import PostListStoreProvider from "./store/Post-list-store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
    <PostListStoreProvider>
      <Header />

      <div className="container-layout">
        <div className="sidebar">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div className="main-content">
          {selectedTab === "Home"&& <PostList></PostList> }
          {selectedTab === "Create Post" &&
          <UploadPost setSelectedTab={setSelectedTab}></UploadPost>
          }
          

        </div>
      </div>

      <Footer />
      </PostListStoreProvider>
    </>
  );
}

export default App;
