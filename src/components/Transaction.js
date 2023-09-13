import React, { useContext } from "react";
import { TransactionDispatchContext } from "../context/TransactionContext";
import { deleteTransactionAction } from "../context/transactionActionCreators";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const dispatch = useContext(TransactionDispatchContext);

  const deleteTransaction = (id) => {
    dispatch(deleteTransactionAction(id));
  };

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={deleteTransaction.bind(this, transaction.id)}
        className="delete-btn">
        x
      </button>
    </li>
  );
};
