import React from "react";
import "./style.css";
import logo from '../../../assets/Logo.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="div">
        <img className="mdi-bell" alt="Mdi bell" src="mdi-bell-notification-outline.svg" />
        <div className="div-2">
          <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
          <div className="text-wrapper">Duy Trọng</div>
        </div>
      </div>
      <div className="logo">
        <img className="image" alt="Image" src={logo} />
        <div className="flexcontainer">
          <p className="text">
            <span className="span">
              TRUNG TÂM KÝ TÚC XÁ
              <br />
            </span>
          </p>
          <p className="text">
            <span className="span">
              ĐẠI HỌC <br />
            </span>
          </p>
          <p className="text">
            <span className="span">BÁCH KHOA HÀ NỘI</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header