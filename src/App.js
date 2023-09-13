import React, { useReducer } from "react";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";
import { TransactionContext, initialState } from "./context/TransactionContext";

function App() {
  const [appState, dispatch] = useReducer((state) => state, initialState);

  return (
    <TransactionContext.Provider value={appState}>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionContext.Provider>
  );
}

export default App;
