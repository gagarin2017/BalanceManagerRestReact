import React, { Component } from "react";
import classes from "./Layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Toolbar from "../Navigation/Toolbar/Toolbar";
// import Footer from "../UI/Footer/Footer";
import { Layout, Breadcrumb } from "antd";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import MyFooter from "../UI/Footer/MyFooter";
const { Content } = Layout;

export default class MyLayout extends Component {
  componentDidMount() {
    // document.body.style.textAlign = "center";
    // document.body.style.backgroundColor = "#333";
    // document.body.style.color = "#fff";
    // document.body.style.height = "100%";
    // document.body.style.display = "-ms-flexbox";
  }

  render() {
    return (
      <>
        <Layout className="layout">
          <Toolbar />
          <Content style={{ padding: "0 20px", marginTop: "35px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              {this.props.children}
            </div>
          </Content>
          <MyFooter />
        </Layout>
      </>
    );
  }
}
