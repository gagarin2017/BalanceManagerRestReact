import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Toolbar.module.css";
import "./Toolbar.module.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header } = Layout;

const Toolbar = (props) => {
  return (
    <Header style={{ padding: "0px" }}>
      <h3
        style={{
          color: "rgba(255, 255, 255, 0.5)",
          padding: "6px 0 10px 10px",
        }}
      >
        Balance Manager
      </h3>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", marginTop: "-64px", paddingLeft: "50%" }}
      >
        <Menu.Item key="1">Balace Comparison</Menu.Item>
        <Menu.Item key="2">Transactions</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Toolbar;
