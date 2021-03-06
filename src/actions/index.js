// Coloque aqui suas actions
export const loginData = (email) => (
  {
    type: 'LOGIN',
    payload: {
      email,
    },
  }
);

export const getExpenses = (expenses) => ({
  type: 'GET_EXPENSES',
  payload: {
    expenses,

  },
});

export const getCurrencies = (exchange) => ({
  type: 'GET_CURRENCIES',
  payload: {
    exchange,
  },
});

export const deleteId = (id) => ({
  type: 'DELETE_ID',
  payload: {
    id,
  },
});

export const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCIES',
});

export const fetchExchangeRates = () => (dispatch) => {
  (requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((exchange) => dispatch((getCurrencies(exchange))));
};
