import { createContext } from "react";

export const initialState = {
  transactions: [
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Milk",
      amount: 10,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Bread",
      amount: 20,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: "Butter",
      amount: 5,
    },
  ],
};

export const TransactionContext = createContext();
export const TransactionDispatchContext = createContext();
