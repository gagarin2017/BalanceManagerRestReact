import React from "react";
import "./App.css";
import MyLayout from "./components/Layout/MyLayout";
import BalanceBuilder from "./containers/BalanceBuilder/BalanceBuilder";

function App() {
  return (
    <div>
      <MyLayout>
        <BalanceBuilder />
      </MyLayout>
    </div>
  );
}

export default App;
