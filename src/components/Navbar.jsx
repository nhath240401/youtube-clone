import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar d-flex px-lg-3 w-100">
      <Link to='/'>
      <img 
      src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" 
      alt="youtube_logo"
      />
      </Link>

      <div className="d-none d-lg-block">
      <div className="d-flex align-items-center">
        <div className="border border-2 rounded-3 p-1">
          <input type="text" placeholder="Search" className="p-1" />
          <i class="fa-solid fa-magnifying-glass p-2"></i>
        </div>
        <i class="fa-solid fa-microphone mx-3"></i>
      </div>
      </div>

        <div className="d-flex align-items-center">
        <i class="fa-solid fa-magnifying-glass p-2 fs-4 me-4"></i>
        <i class="fa-solid fa-ellipsis-vertical me-4 fs-4 d-none d-lg-block"></i>

      {/*   <button className="rounded-5">
          <i class="fa-regular fa-user me-2"></i>
          Sign in
        </button> */}

        <img 
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" 
        alt="avatar"
        className="rounded-circle w-50 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
