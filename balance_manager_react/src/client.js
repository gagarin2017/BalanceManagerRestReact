import fetch from "unfetch";

export const getAllTxDataRows = () =>
  //   fetch("http://localhost:8080/getAllTxDataRows");
  fetch("/getAllTxDataRows");
