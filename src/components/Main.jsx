import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="main py-lg-3 w-100">
      <iframe
        src="https://www.youtube.com/embed/g5Lkz55W_Rc"
        title="BRIGHTON - LIVERPOOL | MÒNG BIỂN TẤN CÔNG NHƯ VŨ BÃO, THE KOP CHOÁNG VÁNG | NGOẠI HẠNG ANH 22/23"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="mx-md-3"
      ></iframe>

      <div className="description-video px-3 px-lg-0 mt-1">
        <div className="hagtag d-flex text-primary">
          <h6 className="me-2">#Brighton</h6>
          <h6 className="me-2">#NgoaiHangAnh</h6>
          <h6 className="me-2">#Liverpool</h6>
        </div>

        <h4 className="fs-5">
          BRIGHTON - LIVERPOOL | MÒNG BIỂN TẤN CÔNG NHƯ VŨ BẢO, THE KOP CHOÁNG
          VÁNG | NGOẠI HẠNG ANH 22/23
        </h4>

        <div className="d-md-flex align-items-center justify-content-between align-items-center mt-2">
          <div className="d-flex align-items-center justify-content-between">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/9/92/Kplus_logo.png"
              alt="logo"
              className="me-3"
            />
            <div className="me-4 d-flex justify-content-center align-items-center flex-column">
              <h6 className="text-black">Kplus Sports</h6>
              <p>2.4M subscribers</p>
            </div>

            <div className="bg-black text-white d-flex align-items-center py-2 px-3 rounded-4 h-100">
              Subscribe
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="me-md-3 rounded-5">
              <button >
                <i class="fa-regular fa-thumbs-up me-2"></i>
                12K
              </button>
              <button>
                <i class="fa-regular fa-thumbs-down me-2"></i>
              </button>
            </div>

            <button className="me-md-3 rounded-5">
              <i class="fa-solid fa-share me-2"></i>
              Share
            </button>

            <button className="rounded-5 px-3 fs-5 d-flex align-items-center py-3">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>

        <div className="bg-light rounded-3 p-3">
          <p>
            1.8M views <span>2 weeks ago</span>
          </p>
          <h5>
            BRIGHTON - LIVERPOOL | MÒNG BIỂN TẤN CÔNG NHƯ VŨ BẢO, THE KOP CHOÁNG
            VÁNG | NGOẠI HẠNG ANH 22/23
          </h5>
        </div>

        <div className="comment mt-4">
          <span className="mx-2"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-comment"
          aria-expanded={open}
          >1,259 Comments
          
            <span className="mx-4">
              <i class="fa-solid fa-arrow-up-short-wide me-3"></i>
              Sort by
            </span>
          </span>

          <div className="d-lg-flex flex-grow-1 d-none d-lg-block mt-3 w-100">
            <img 
            src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" 
            alt="" 
            className="me-3"
            />

            <div className="w-100">
              <input type="text" placeholder="Viết bình luận..." />
              <hr />
            </div>
          </div>

          <Collapse in={open}>
          <div className="mt-4" id='collapse-comment'>
            <div className="d-flex mb-3">
              <img
              src="https://upload.wikimedia.org/wikipedia/vi/9/92/Kplus_logo.png"
              alt="logo"
              className="me-3"
              />
              <div className="reaction">
                <h6>Pinned by Kplus Sports</h6>
                <h6>Kplus Sport <span>2 weeks ago</span></h6>
                <p>ƯU ĐÃI NĂM MỚI: APP K+ GÓI TRỌN VẸN giảm 𝟓𝟎% chỉ còn 𝟖𝟖,𝟎𝟎𝟎đ/tháng - Tận hưởng trọn vẹn THỂ THAO ĐỈNH CAO trên mọi nền tảng Smart TV, Smartphone, Tablet, Laptop và xem đồng thời trên 2 thiết bị!!</p>
                <>
                <span className="me-4"><i class="fa-regular fa-thumbs-up me-1"></i> 9</span>
                <span className="me-4"><i class="fa-regular fa-thumbs-down me-1"></i></span>
                <span>Reply</span>
                </>
              </div>
            </div>
            <div className="d-flex mb-3">
              <img
              src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
              alt="logo"
              className="me-3"
              />
              <div className="reaction">
                <h6>Tên Chưa Được Đặt<span>2 weeks ago</span></h6>
                <p>hàng phòng ngự chắc chắn,hàng tiền vệ và hàng công nhịp nhàng thăng hoa,Brighton đang làm Liverpool nhớ về thời huy hoàng 2019-2021</p>
                <>
                <span className="me-4"><i class="fa-regular fa-thumbs-up me-1"></i> 139</span>
                <span className="me-4"><i class="fa-regular fa-thumbs-down me-1"></i></span>
                <span>Reply</span>
                </>
              </div>
            </div>
            <div className="d-flex mb-3">
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVftgrJiBIy9AGIKjDa7kZvIiKeaeTKEDBQ&usqp=CAU"
              alt="logo"
              className="me-3"
              />
              <div className="reaction">
                <h6>Kòy Khánh <span>2 weeks ago</span></h6>
                <p>Tất cả những đường bóng của BRIGHTON đều rất đẹp. Liver thua hoàn toàn thiết phục</p>
                <>
                <span className="me-4"><i class="fa-regular fa-thumbs-up me-1"></i> 2</span>
                <span className="me-4"><i class="fa-regular fa-thumbs-down me-1"></i>3</span>
                <span>Reply</span>
                </>
              </div>
            </div>
          </div>
          </Collapse>
        </div>
      </div>


    </div>
  );
};

export default Main;
