import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar p-2">
      <div className="">
        <i onClick={handleShow} 
           class="fa-solid fa-bars fs-5 mx-2 my-4 d-none d-lg-block cursor-pointer"></i>
        <ul className="d-none d-lg-block">
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-house mx-4"></i>
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-film mx-4"></i>
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-circle-play mx-4"></i>
          </li>

          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-barcode mx-3"></i>
          </li>
        </ul>
      </div>

      <Offcanvas show={show} onHide={handleClose} style={{width: '200px'}}>
        <Offcanvas.Header closeButton>

        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="d-none d-lg-block">
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-house mx-4"></i>
            Home
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-film mx-4"></i>
            Shorts
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-circle-play mx-4"></i>
            Subscriptions
          </li>

          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-barcode mx-3"></i>
            Library
          </li>
        </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="">
        <ul className="d-lg-none d-flex flex-lg-column bg-white position-lg-fixed fixed-bottom w-100 mb-0">
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-house mx-4"></i>
            Home
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-film mx-4"></i>
            Shorts
          </li>
          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-circle-play mx-4"></i>
            Subscriptions
          </li>

          <li className="mb-3 p-2 d-flex flex-column justify-content-center align-items-center w-100">
            <i class="fa-solid fa-barcode mx-3"></i>
            Library
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
