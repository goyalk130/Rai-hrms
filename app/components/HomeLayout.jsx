"use client"
import React, { useState } from "react";
import { ConfigProvider, Layout } from "antd";

import SideBar from "./SideBar";
import { Content, Header } from "antd/es/layout/layout";
import SearchBar from "./Header/SearchBar";
import Notification from "./Header/Notification";
import UserHolder from "./Header/User";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeLayout = ({ children }) => {
      const [collapsed, setcollapsed] = useState(false)
  return (
    <Layout>
      <SideBar collapsed={collapsed}  />
      <Layout>
        <Header className="bg-header flex justify-between gap-10 h-20 items-center">
          <div>
            {" "}
            <GiHamburgerMenu size={26} onClick={()=>{
              setcollapsed(!collapsed)
            }} className="text-base" />{" "}
          </div>
          <div className="flex justify-end gap-10 h-20 items-center">
            <div>
              <SearchBar />
            </div>
            <div>
              <Notification />
            </div>
            <div className=" flex items-center !h-fit">
              <UserHolder />
            </div>
          </div>
        </Header>
        <Content className="bg-panel">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
