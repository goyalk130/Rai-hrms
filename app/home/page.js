"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import LineChart from "../components/(Home)/Line";
import BarChart from "../components/(Home)/Bar";

const Page = () => {
  useEffect(() => {
    axios.get("/api/current").then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="px-3 py-6 gap-4 flex w-full">
      <Row   className=" gap-4 flex-grow w-8/12">
        <Col span={6}>
          <Card bordered={false} className=" bg-white">
            <Statistic classname="!text-white"
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} className=" bg-white">
            <Statistic classname="!text-white"
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} className=" bg-white">
            <Statistic classname="!text-white"
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24} >
          <BarChart/>
        </Col>
      </Row>
      <Row className="w-4/12">
      <Col span={24} >
          <LineChart/>
        </Col>
       
      </Row>
    </div>
  );
};

export default Page;
