import React from "react";
import classes from "./TxDataRow.module.css";

const txDataRow = (props) => (
  <article className={classes.TxDataRow}>
    <h2>{props.txDataRow.txDate}</h2>
    <hr />
    <h3>{props.txDataRow.accountName}</h3>
    <h3>{props.txDataRow.categoryName}</h3>
    <h3>{props.txDataRow.debitAmount}</h3>
    <h3>{props.txDataRow.creditAmount}</h3>
    <h3 className={classes.Author}>{props.txDataRow.isRemote}</h3>
  </article>
);

export default txDataRow;
