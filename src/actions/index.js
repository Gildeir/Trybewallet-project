// Coloque aqui suas actions
export const loginData = (email) => (
  {
    type: 'LOGIN',
    payload: {
      email,
    },
  }
);

export const resultCurrencyAction = (newCurrency) => ({
  type: 'TYPE_CURRENCY',
  payload: {
    newCurrency,
  },
});

// export const getCurrencyResult = () => async (dispatch) => {
//   const request = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const resolve = await request.json();
//   dispatch(resultCurrencyAction(resolve));
// };
