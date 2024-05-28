import { BellOutlined } from "@ant-design/icons";
import { Badge, Dropdown } from "antd";
import React from "react";

const Notification = () => {
  return (
    <Dropdown menu={{items:[{
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },],style:{}}} className="">
    <Badge className="" count={5}>
      <BellOutlined className="text-base !text-xl" />
    </Badge>

    </Dropdown>
  );
};

export default Notification;
