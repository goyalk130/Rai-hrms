"use client";
import React, { useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Grid,
  Input,
  Modal,
  theme,
  Typography,
} from "antd";

import {
  LockOutlined,
  MailOutlined,
  NumberOutlined,
  UpSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Loader from "../../Loader";
import axios from "axios";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function EditUser({user, openModal, setopenedituser }) {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    
    axios
      .put("/api/employee/update", {
        ...values,
        salary: parseInt(values.salary),
        id:user._id        
      })
      .then((data) => {
        console.log(data);
        setisloading(false)
        setopenedituser()
      });
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
    <Modal
      title="Edit Employee"
      centered
      open={openModal}
      onOk={() => {
        setopenedituser();
      }}
      onCancel={() => {
        setopenedituser();
      }}
      className="!bg-white !text-white"
      styles={{backgroundColor:"white"}}
      type="primary"
    >
      <section
        className="!bg-panel !h-full flex w-full justify-center items-center"
        style={styles.section}
      >
        {isloading ? (
          <Loader />
        ) : (
          <div style={styles.container} className="bg-white">
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
                label={<h1 className="!text-black">Position</h1>}
                className=""
                name="position"
                rules={[
                  {
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
                label={<h1 className="!text-black">Salary</h1>}
                className=""
                name="salary"
                rules={[
                  {
                    type: "text",
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
                  Update
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
    </Modal>
  );
}
