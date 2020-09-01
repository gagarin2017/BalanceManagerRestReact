import React from "react";
import classes from "./MyFooter.module.css";
import { Layout } from "antd";
const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }} className={classes.mastfoot}>
      <p>Developed by Greenland Corp. (c) Yury Gagarin</p>
    </Footer>
  );
};

export default MyFooter;
