import React, { Component } from "react";
import "./App.css";
import { getAllTxDataRows } from "./client";
import { Table } from "antd";

class App extends Component {
  state = {
    allTxDataRows: [],
  };

  componentDidMount() {
    this.fetchAllTxtRows();
  }

  fetchAllTxtRows() {
    getAllTxDataRows()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          allTxDataRows: data,
        });
      });
  }

  render() {
    const { allTxDataRows } = this.state;

    if (allTxDataRows && allTxDataRows.length) {
      return allTxDataRows.map((row, index) => {
        return (
          <div key={index}>
            <h2>{row.uuid}</h2>
            <p>Date: {row.txDate}</p>
            <p>Account name: {row.accountName}</p>
            <p>Category name: {row.categoryName}</p>
            <p>Debit amount: {row.debitAmount}</p>
            <p>Credit amount: {row.creditAmount}</p>
            <p>Created at: {row.created_at}</p>
            <p>Updated at: {row.updated_at}</p>
            <p>Remote transaction: {row.remote ? "true" : "false"}</p>
            <p>Reconsiled: {row.reconsiled ? "true" : "false"}</p>
            <hr />
          </div>
        );
      });
    }

    return <h1>Sorry, no transactions found!</h1>;
  }
}

export default App;
