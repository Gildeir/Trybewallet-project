import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteId } from '../actions';
import HeaderTable from './HeaderTable';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.table = this.table.bind(this);
  }

  table() {
    const { newExpenses, deleteFunc } = this.props;
    return (
      <tbody>
        {newExpenses.map((list, index) => (
          <tr key={ index }>
            <td>{list.description}</td>
            <td>{list.tag}</td>
            <td>{list.method}</td>
            <td>{list.value}</td>
            <td role="cell">
              { console.log(list.id)}
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
            <td>Real</td>
            {/* <button type="button">
              Editar
              <img
                alt="Edit button"
              />
            </button> */}
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteFunc(list.id) }
            >
              Deletar
            </button>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        <HeaderTable />
        {this.table()}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  newExpenses: state.wallet.expenses,
});

Table.propTypes = {
  newExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteFunc: (id) => dispatch(deleteId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
