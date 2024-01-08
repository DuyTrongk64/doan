import React from "react";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      <div className="div">
        <div className="text-wrapper">Điều hướng</div>
        <div className="div-2">
          <span class="material-symbols-outlined">home</span>
          <div className="text-wrapper-2">Trang chủ</div>
        </div>
        <div className="div-3">
          <span class="material-symbols-outlined">
            terminal
          </span>
          <div className="text-wrapper-3">Bảng điều khiển</div>
        </div>
      </div>
      <div className="div-4">
        <div className="text-wrapper-4">Quản lý đăng ký</div>
        <div className="div-5">
          <span class="material-symbols-outlined">
            how_to_reg
          </span>
          <div className="text-wrapper-2">Đăng ký các kỳ</div>
        </div>
        <div className="div-5">
          <span class="material-symbols-outlined">
            meeting_room
          </span>
          <div className="text-wrapper-2">Phòng hiện tại</div>
        </div>
      </div>
      <div className="div-6">
        <div className="text-wrapper-4">Tài khoản</div>
        <div className="div-7">
          <span class="material-symbols-outlined">
            manage_accounts
          </span>
          <div className="text-wrapper-2">Sửa hồ sơ</div>
        </div>
        <div className="div-7">
          <span class="material-symbols-outlined">
            logout
          </span>
          <div className="text-wrapper-2">Đăng xuất</div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar