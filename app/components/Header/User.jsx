"use client";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, message, Space, Tooltip } from "antd";
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item." + e?.key);
  console.log("click", e);
};


const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    disabled: false,
  },
  {
    label: "3rd menu item",
    key: "5",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const UserHolder = () => (
  <Space wrap>
    <Dropdown
      menu={menuProps}
      placement="bottomRight"
      className="flex justify-center items-center !h-12"
    >
      <a onClick={(e)=>{e.preventDefault()}}>
      <div className="flex flex-row h-full gap-3 justify-center items-center">
        <div className="flex flex-col items-end justify-start h-fit ">
          <h1 className="text-base font-semibold m-0 p-0">Karan Goyal</h1>
          <p className="text-base opacity-60 p-0 m-0">Job Role</p>
        </div>
        <Avatar
          src="https://avatars.githubusercontent.com/u/56532529?v=4"
          className="bg-primary font-semibold text-xl cursor-pointer h-12 w-12 rounded-lg"
        ></Avatar>
      </div>
      </a>
    </Dropdown>
  </Space>
);
export default UserHolder;
