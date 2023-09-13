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
      return state;
    }
    default:
      return state;
  }
};
