import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../../src/App.css";
import Topic from "../components/Topic";
import Videos from "../components/Videos";

const Home = () => {
  return (
    <div class="home d-flex">
        <Sidebar />
      <div class="p-2 flex-grow-1">
        <Navbar />
        <Topic />
        <Videos />
      </div>
    </div>
  );
};

export default Home;
