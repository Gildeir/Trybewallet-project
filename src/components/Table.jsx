import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderTable from './HeaderTable';

export class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <HeaderTable />
        <tbody>
          {expenses.map((list, index) => (
            <tr key={ index }>
              <td>{list.description}</td>
              <td>{list.tag}</td>
              <td>{list.method}</td>
              <td>{list.value}</td>

              <td role="cell">
                { console.log(list.currency)}
                {
                  list.currency === 'USD'
                    ? 'Dólar Comercial'
                    : list.exchangeRates[list.currency].name.split('/', 1)
                }
              </td>
              <td>
                {
                  parseFloat(list.exchangeRates[list.currency].ask).toFixed(2)
                }
              </td>
              <td>
                {
                  parseFloat(list.value
                    * list.exchangeRates[list.currency].ask).toFixed(2)
                }
              </td>
              <td>
                {
                }
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
