import createSlice from '@reduxjs/tookit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,

});

export const addTransaction = (transaction) => {
  return {
    type: 'transactions/addTransaction',
    payload: transaction,
    reducers: {
      // add the new transaction object (action.payload) to the correct category’s transaction list in the transactions state object
      addTransaction: (state, action) => {
        const category = action.payload.category;
        state[category].push(action.payload);
      },
      deleteTransaction: (state, action) =>{
        //In the deletedIndex in transaction Reducer, action.payload.category and action.payload.id are both used. 
        const id = action.payload.id;
        const category = action .payload.category;
         // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
      // 1. Find the category in `state` that matches the `category` property on `action.payload`
      // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array.
        state[category] = state[category].filter(transaction => transaction.id !== id)

      }
    },
  }
}


export default transactionsSlice.reducer;
