import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3">
      <div className="nav d-flex  align-items-center">
        <i class="fa-solid fa-bars fs-5 me-4"></i>
        <Link to="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="youtube_logo"
          />
        </Link>
      </div>

      <div className="d-none d-lg-block">
        <div className="d-flex align-items-center">
          <div className="d-flex border border-2 rounded-5 p-1">
            <input type="text" placeholder="Search" className="p-1" />
            <i class="fa-solid fa-magnifying-glass p-2"></i>
          </div>
          <i class="fa-solid fa-microphone mx-3"></i>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <i class="fa-solid fa-magnifying-glass p-2 me-4 d-lg-none fs-4"></i>  
        <i class="fa-solid fa-ellipsis-vertical me-4 fs-4"></i>

        <button className="rounded-5 btn-signin d-none d-lg-block">
          
          <i class="fa-regular fa-user me-2"></i>
          Sign in
        </button>

      </div>
    </div>
  );
};

export default Nav;
