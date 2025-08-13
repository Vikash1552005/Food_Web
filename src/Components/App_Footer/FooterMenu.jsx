// import {
//   HomeOutlined,
//   MoneyCollectOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import React from "react";
// import { Modal } from "react-bootstrap";
// import  { useState } from "react";

// function FooterMenu() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <section className="FooterMenu-sec">
//         <div className="main-footer-menu-div">
//           <div className="footer-menu-div-home">
//             <div className="footer-menu-home-img">
//               <HomeOutlined />
//             </div>
//             <div className="footer-menu-home-text">
//               <h1>Home</h1>
//             </div>
//           </div>
//           <div className="footer-menu-div-home">
//             <div className="footer-menu-home-img">
//               <UserOutlined />
//             </div>
//             <div className="footer-menu-home-text">
//               <h1>Account</h1>
//             </div>
//           </div>
//           <div className="footer-menu-div-home">
//             <div className="footer-menu-home-img">
//               <MoneyCollectOutlined />
//             </div>
//             <div className="footer-menu-home-text">
//               <h1> Collection</h1>
//             </div>
//           </div>
//           <div className="footer-menu-div-home">
//             <div className="footer-menu-home-img">
//               <SearchOutlined onClick={showModal} />{" "}
//             </div>
//             <div className="footer-menu-home-text">
//               <h1>Search</h1>
//             </div>
//           </div>
//           <div className="footer-menu-div-home">
//             <div className="footer-menu-home-img">
//               <ShoppingCartOutlined />
//             </div>
//             <div className="footer-menu-home-text">
//               <h1>My cart</h1>
//             </div>
//           </div>
//         </div>
//         <Modal
//           title="Basic Modal"
//           closable={{ "aria-label": "Custom Close Button" }}
//           open={isModalOpen}
//           onOk={handleOk}
//           onCancel={handleCancel}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </section>
//     </>
//   );
// }

// export default FooterMenu;
import {
  HomeOutlined,
  MoneyCollectOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";
import { Modal } from "react-bootstrap"; 

function FooterMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <section className="FooterMenu-sec">
        <div className="main-footer-menu-div">
          <div className="footer-menu-div-home">
            <div className="footer-menu-home-img">
              <HomeOutlined />
            </div>
            <div className="footer-menu-home-text">
              <h1>Home</h1>
            </div>
          </div>
          <div className="footer-menu-div-home">
            <div className="footer-menu-home-img">
              <UserOutlined />
            </div>
            <div className="footer-menu-home-text">
              <h1>Account</h1>
            </div>
          </div>
          <div className="footer-menu-div-home">
            <div className="footer-menu-home-img">
              <MoneyCollectOutlined />
            </div>
            <div className="footer-menu-home-text">
              <h1>Collection</h1>
            </div>
          </div>
          <div className="footer-menu-div-home">
            <div className="footer-menu-home-img">
              <SearchOutlined onClick={showModal} />
            </div>
            <div className="footer-menu-home-text">
              <h1>Search</h1>
            </div>
          </div>
          <div className="footer-menu-div-home">
            <div className="footer-menu-home-img">
              <ShoppingCartOutlined />
            </div>
            <div className="footer-menu-home-text">
              <h1>My Cart</h1>
            </div>
          </div>
        </div>

        <Modal show={isModalOpen} onHide={handleClose} className="Modal">
          <Modal.Header closeButton>
            <Modal.Title>
              <Input
                className="search-input"
                type="text"
                placeholder="Search"
                allowClear
                suffix={<SearchOutlined />}
              />
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </section>
      
    </>
  );
}

export default FooterMenu;
