import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Input, Button } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import classes from "./BlanceInput.module.css";

const BalanceInput = () => {
  return (
    <div>
      <Row type="flex" justify="start">
        <Col span={3}>
          <strong>Enter the latest balance:</strong>
        </Col>
        <Col span={3}>
          <Input prefix="€" suffix="EUR" placeholder="10.53" size="small" />
        </Col>
        <Col span={3}>
          <Button
            icon={<LineChartOutlined />}
            size="small"
            style={{ marginLeft: "10px" }}
          >
            Recalculate
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default BalanceInput;
