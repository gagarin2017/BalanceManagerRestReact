import React, { Component } from "react";
import axios from "../../axios";
import "antd/dist/antd.css";
import { Table, Badge, Statistic, Radio, Divider } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import BalanceInput from "../../components/BalanceInput/BalanceInput";

const sortTheDates = (date1, date2) => {
  let pattern = /(\d{2})-(\d{2})-(\d{4})/;
  let dt1 = new Date(date1.replace(pattern, "$3-$2-$1"));
  let dt2 = new Date(date2.replace(pattern, "$3-$2-$1"));
  return dt1 - dt2;
};

const columns = [
  {
    title: "Date",
    dataIndex: "txDate",
    key: "txDate",
    sorter: (a, b) => sortTheDates(a.txDate, b.txDate),
  },
  {
    title: "Account",
    dataIndex: "accountName",
    key: "accountName",
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
  },
  {
    title: "Debit",
    key: "debitAmount",
    render: (dataObj) => {
      let debitColumn = null;

      if (dataObj.debitAmount > 0) {
        debitColumn = (
          <Statistic
            value={dataObj.debitAmount}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
          />
        );
      }

      return debitColumn;
    },
    sorter: (a, b) => a.debitAmount - b.debitAmount,
  },
  {
    title: "Credit",
    key: "creditAmount",
    render: (dataObj) => {
      let creditColumn = null;
      if (dataObj.creditAmount > 0) {
        creditColumn = (
          <Statistic
            value={dataObj.creditAmount}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
          />
        );
      }

      return creditColumn;
    },
  },
  {
    title: "Remote/Local",
    key: "remote",
    render: (dataObj) => {
      let remoteColumn = (
        <span>
          <Badge color="purple" />
          Local
        </span>
      );

      if (dataObj.remote) {
        remoteColumn = (
          <span>
            <Badge status="success" />
            Remote
          </span>
        );
      }
      return remoteColumn;
    },
  },
];

export default class BalanceBuilder extends Component {
  state = {
    txDataRows: [],
    selectedTxDataRow: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/txDataRow/all")
      .then((reponse) => {
        this.setState({ txDataRows: reponse.data });
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({ error: true });
      });
  }

  onChange = (pagination, filters, sorter, extra) => {};

  render() {
    let txDataRows = <p>Something went wrong. The tx data is not available.</p>;

    // if (!this.state.error) {
    //   txDataRows = this.state.txDataRows.map((txDataRow) => {
    //     const updatedTxDataRow = { ...txDataRow };
    //     return (
    //       <div>
    //         <TxDataRow key={txDataRow.id} txDataRow={txDataRow} />
    //       </div>
    //     );
    //   });
    // }

    if (!this.state.error) {
      const data = [...this.state.txDataRows];
      const displayData = data.slice(0, 7);

      txDataRows = (
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
          onChange={this.onChange}
        />
      );
    }

    return (
      <>
        <BalanceInput />
        <br />
        {txDataRows}
      </>
    );
  }
}
