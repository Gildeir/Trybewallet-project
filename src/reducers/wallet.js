// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.payload.exchange),
    };
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };

  default:
    return state;
  }
}

export default wallet;
