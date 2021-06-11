import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resultCurrencyAction } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
      newCurrency: 'USD',
    };
    this.getCurrencyApi = this.getCurrencyApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  async getCurrencyApi() {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await request.json();
    this.setState({
      currency: resolve,
    });
  }

  handleChange({ target: { value } }) {
    this.setState(() => ({
      newCurrency: value,
    }));
  }

  render() {
    const { currency, newCurrency } = this.state;
    const { saveCurrrency } = this.props;
    console.log(saveCurrrency);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" name="name" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select onChange={ this.handleChange }>
            {Object.keys(currency).filter((b) => b !== 'USDT')
              .map((curr, index) => (
                <option
                  key={ index }
                  value={ curr }
                  onClick={ () => saveCurrrency(newCurrency) }
                >
                  {curr}
                </option>))}
            {}
          </select>
        </label>
        <label htmlFor="método-de-pagamento">
          Método de pagamento
          <select>
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select>
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
      </form>
    );
  }
}

Forms.propTypes = {
  saveCurrrency: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { newCurrency } }) => ({
  newCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrrency: (newCurrency) => dispatch(resultCurrencyAction(newCurrency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
