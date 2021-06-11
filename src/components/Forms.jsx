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
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" name="name" />
        </label>
        <label htmlFor="descriptionId">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
            onChange={ this.handleChange }
            onClick={ () => saveCurrrency(newCurrency) }
          >
            {Object.keys(currency).filter((b) => b !== 'USDT')
              .map((curr, index) => (
                <option key={ index } value={ curr }>
                  {curr}
                </option>))}
          </select>
        </label>
        <label htmlFor="metodoDePagamento">
          Método de pagamento
          <select name="metodoDePagamento" id="metodoDePagamento">
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="Alimentacao"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="saude"> Saúde </option>
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
