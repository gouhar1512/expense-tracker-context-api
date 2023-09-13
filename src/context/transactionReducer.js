export const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      let updatedTransactions = [...state.transactions];
      updatedTransactions.push(action.payload);
      return {
        ...state,
        transactions: updatedTransactions,
      };
    }
    case "DELETE": {
      let updatedTransactions = [...state.transactions];
      updatedTransactions = updatedTransactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        transactions: updatedTransactions,
      };
    }
    default:
      return state;
  }
};
