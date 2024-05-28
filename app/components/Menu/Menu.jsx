"use client";

import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { GiChessKing } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
const items = [
  {
    key: "0",
    icon: <GiChessKing />,
    label: "Home",
  },
  {
    key: "1",
    icon: <UserAddOutlined />,
    label: "Employee management",
    children: [
      {
        key: "11",
        label: "Manage",
      },
      {
        key: "12",
        label: "Add Employee",
      },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "Leave",
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Teams",
  },
  {
    key: "4",
    icon: <SettingOutlined />,
    label: "Tasks",
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
const App = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);

  const [selected, setselected] = useState("0");
  useEffect(() => {
    console.log(pathname);
    if (pathname == "/home") {
      console.log(0);
      setselected("0");
    } else if (pathname == "/home/employee/manage") {
      console.log(11);
      setselected("2");
    }
  }, []);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
      console.log(stateOpenKeys);
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={selected}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "256",
        height: "100%",
        background: "tra",
      }}
      items={items}
      onClick={(e) => {
        console.log(e);
        if (e.key == "0") {
          router.push("/home");
        } else if (e.key == "11") {
          router.push("/home/employee/manage");
        } else if (e.key == "12") {
          router.push("/home/employee/add");
        } else if (e.key == "11") {
          router.push("/home/employee/manage");
        } else if (e.key == "11") {
          router.push("/home/employee/manage");
        } else if (e.key == "11") {
          router.push("/home/employee/manage");
        }
      }}
    />
  );
};
export default App;
