// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  newCurrency: 'USD',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'TYPE_CURRENCY':
    return {
      ...state,
      newCurrency: action.payload.newCurrency,
    };
  default:
    return state;
  }
}

export default wallet;
