import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "./admin.css";
import { Link, Routes, Route } from "react-router-dom";
import Tilxat from "./murojat/Tilxat";
import Posts from "./Posts";
import { NavLink } from "react-router-dom";
import Userinfo from "../UserAdd/Userinfo";
import UserFooter from "../UserAdd/UserFooter";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<h2 className="myAdminh2">Admin</h2>),
  getItem("Menyular", "2", <DesktopOutlined />),
  getItem("Murojat", "sub1", <UserOutlined />, [
    getItem("Ariza", "3"),
    getItem("Shikoyat", "4"),
    getItem(<NavLink to="/admin/tilxat">Tilxat</NavLink>, "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const MyAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header />
          <Content>
            <Tilxat />
            <Userinfo />
            <UserFooter />
            <Link to='/' >ortga</Link>
        
          </Content>

          <Footer>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MyAdmin;
