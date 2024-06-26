import { Inter } from "next/font/google";
import { ConfigProvider, Layout } from "antd";
import HomeLayout from "../components/HomeLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home({ children }) {
  return (
    <HomeLayout>
      <div className="w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-scroll">
        {children}
      </div>
    </HomeLayout>
  );
}
