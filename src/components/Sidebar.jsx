

const Sidebar = () => {
  return (
    <div class="sidebar p-2 d-none d-lg-block">
      <div className="mx-2 fs-5">
        <i class="fa-solid fa-bars fs-5"></i>
      </div>

      <ul className="">
        <li className="mb-2 p-2">
          <i class="fa-solid fa-house me-3"></i>
          Home
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-film me-3"></i>
          Shorts
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-circle-play me-3"></i>
          Subscriptions
        </li>

        <hr />

        <li className="mb-2 p-2">
          <i class="fa-solid fa-barcode me-3"></i>
          Library
        </li>

        <li className="mb-2 p-2">
          <i class="fa-sharp fa-solid fa-clock-rotate-left me-3"></i>
          History
        </li>

        <hr />
      </ul>

      <div className="d-flex flex-column justify-content-center align-items-center mx-1">
        <p className="w-100">Sign in to like videos, comment, and subscribe.</p>
        <button className="rounded-5">
          <i class="fa-regular fa-user me-2"></i>
          Sign in
        </button>
      </div>

      <hr />

      <ul className="">
        <h5>Explore</h5>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-fire me-3"></i>
          Trending
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-music me-3"></i>
          Music
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-gamepad me-3"></i>
          Gaming
        </li>
        <li className="mb-2 p-2">
          <i class="fa-regular fa-newspaper me-3"></i>
          News
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-trophy me-3"></i>
          Sports
        </li>

        <hr />

        <li className="mb-2 p-2">
          <i class="fa-sharp fa-solid fa-circle-plus me-3 "></i>
          Browse channels
        </li>

        <hr />
      </ul>

      <ul className="">
        <h5>More from YouTube</h5>
        <li className="mb-2 p-2">
          <img
            src="https://play-lh.googleusercontent.com/76AjYITcB0dI0sFqdQjNgXQxRMlDIswbp0BAU_O5Oob-73b6cqKggVlAiNXQAW5Bl1g"
            alt="youtube_music"
            className="me-2"
          />
          YouTube Music
        </li>
        <li className="mb-2 p-2">
          <img
            src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"
            alt="youtube_kids"
            className="me-2"
          />
          YouTube Kids
        </li>
        <li className="mb-2 p-2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/////AAD/YWH/LCz/+fn/NDT/5OT/W1v/tLT/pqb//Pz/s7P/Z2f/X1//Kir/sLD/8fH/09P/3t7/jIz/hob/bGz/Hh7/QkL/fX3/2dn/xcX/nZ3/dnb/TU3/urr/kpL/Ozv/zs7/EBD/Ghr/7e3/nJz/o6P/SkrnPPM4AAACNklEQVR4nO3d/U7iQBSG8VepCBXKh7orrrKyft3/HUoaYzTAPzNncs50n98FNHkShvZM21QCAAAAAAAAAAAAAAAAAAAAAABAmvZqNj8PYn69tg/cdGeh3JgHehcduLUNbH95Bx3amhYuvHOO+G1aeO6dc8zYsvDSu+YYCimk0B+FFFLoj0IKKfRHIYUU+qOQQgr9hSmcTM2afopTqObOrOq7QIXSpsTPPFShdG8W9iVYofTHLO1TuEItH8zievEKpdWjWd5ZzEJpa9YXtVD6O/hCjW+HXrhfjk9DL5Qm/4ZeqPZ66IX75TgbeqG0y3zAI36hNM1ajjUUapkzV1VRKK3TD11J4X6ueh56ofQ2+MLEuaqmwrSZo6bC5iblwBUVLtJOi9UU7lInjUoKX9IvT6sobHJGjBoKJ1nX3vELV+85ffELl9nbNbEL29fcvuCF21F+YOTCtc3Wd9jCrKm3gsI2cVSqpvD+wiwwZOHY9FZwvMJl0ox0WrjCaep+zCnBCleGC/BTqMJxiZffAhU2dndFv4tTmDcjnRam0PoP5kuYwmIopJBCfxRSSKE/Cimk0B+FFFLoj0IK/7PCuXfNMaaFpV6SzPHUWhY2xbYE011ZBko7754DM9vAIm9IZnmwDpTa6Xs3iqEb3W3sAwFE1jYFecf1Ft1FMY/ecb2SV3Sdd1yvZOHIO65HIYUU+qOw/kK7h34PxTgfbi/LfcfC+AMIAAAAAAAAAAAAAAAAAAAAAAAAkD4AsClMvg+BIa4AAAAASUVORK5CYII="
            alt="youtube_tv"
            className="me-2"
          />
          YouTube TV
        </li>

        <hr />

        <li className="mb-2 p-2">
          <i class="fa-solid fa-gear me-3"></i>
          Settings
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-flag me-3"></i>
          Report History
        </li>
        <li className="mb-2 p-2">
          <i class="fa-regular fa-circle-question me-3"></i>
          Help
        </li>
        <li className="mb-2 p-2">
          <i class="fa-solid fa-message me-3"></i>
          Send feedback
        </li>

        <hr />
      </ul>

      <div className="term mx-2">
        <div className="d-flex flex-wrap">
          <p>About</p>
          <p>Press</p>
          <p>Copyright</p>
          <p>Contact us</p>
          <p>Creators</p>
          <p>Advertise</p>
          <p>Developers</p>
        </div>

        <div className="d-flex flex-wrap mt-2">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Policy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </div>
      </div>

      <span>
        <i class="fa-regular fa-copyright me-1"></i>
        2023 Google LLC
      </span>
    </div>
  );
};

export default Sidebar;
