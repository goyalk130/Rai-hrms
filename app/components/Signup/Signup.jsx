"use client";
import React, { useEffect, useState } from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import {
  LockOutlined,
  MailOutlined,
  NumberOutlined,
  UpSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Loader from "../Loader";
import axios from "axios";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function Signup() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios.post("/api/create",{
      ...values,salary:parseInt(values.salary),role:"employee"
    }).then(data=>{
      console.log(data)
    })

  };

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  }, []);
  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
      color: "black",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section
      className="!bg-panel !h-full flex w-full justify-center items-center"
      style={styles.section}
    >
      {isloading ? (
        <Loader />
      ) : (
        <div style={styles.container}>
          {/* <div className="flex flex-col items-center " style={styles.header}>
            <h1 className="text-primary text-5xl font-semibold italic py-4">
              {" "}
              RAI
            </h1>
          </div> */}
          <Title
            style={styles.title}
            className="!text-black text-center !text-xl"
          >
            Create Account
          </Title>
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              label={<h1 className="!text-black">Name</h1>}
              className=""
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Name"
                className="!bg-white text-black"
              />
            </Form.Item>
            <Form.Item
              label={<h1 className="!text-black">Position</h1>}
              className=""
              name="position"
              rules={[
                {
                  required: true,
                  message: "Please input your Position!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="position"
                className="!bg-white text-black"
              />
            </Form.Item>
            <Form.Item
              label={<h1 className="!text-black">Email Address</h1>}
              className=""
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                className="!bg-white text-black"
              />
            </Form.Item>
            <Form.Item
              label={<h1 className="!text-black">Username</h1>}
              className=""
              name="username"
              rules={[
                {
                  type: "text",
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UpSquareOutlined />}
                placeholder="text"
                className="!bg-white text-black"
              />
            </Form.Item>
            <Form.Item
              label={<h1 className="!text-black">Salary</h1>}
              className=""
              name="salary"
              rules={[
                {
                  type: "text",
                  required: true,
                  message: "Please input your Salary!",
                },
              ]}
            >
              <Input
                prefix={<NumberOutlined />}
                placeholder="Salary"
                className="!bg-white text-black"
              />
            </Form.Item>
            <Form.Item
              label={<h1 className="text-black">Password</h1>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                className="!bg-white text-black"
                min={6}
                max={15}
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item
                className="text-black"
                name="terms"
                valuePropName="unchecked"
                noStyle
              >
                <Checkbox className="text-black">
                  I accept all terms & condition
                </Checkbox>
              </Form.Item> */}
            {/* <a style={styles.forgotPassword} href="">
              Forgot password?
            </a> */}
            {/* </Form.Item> */}
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button block="true" type="primary" htmlType="submit">
                Create
              </Button>
              <div style={styles.footer}>
                <Text style={styles.text}>Already a User?</Text>{" "}
                <Link href="/login">Login now</Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </section>
  );
}
