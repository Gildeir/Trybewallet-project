import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExchangeRates, getExpenses } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.getCurrencyApi = this.getCurrencyApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.optionTag = this.optionTag.bind(this);
    this.optionMethod = this.optionMethod.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valor = this.valor.bind(this);
    this.descricao = this.descricao.bind(this);
    // this.setStateChange = this.setStateChange.bind(this);
    this.execution = this.execution.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  componentDidMount() {
    const { saveExchangeRates } = this.props;
    saveExchangeRates();
  }

  async getCurrencyApi() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resolve) => {
        this.setState({
          exchangeRates: resolve,
        },
        () => this.execution());
      });
  }

  // async getCurrencyApi() {
  //   const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   const resolve = await request.json();
  //   this.setState({
  //     { currency: resolve },
  //     { exchangeRates: i },
  //     () => this.execution(),
  //   });
  // }

  // setStateChange({ target: { value, id } }) {
  //   this.setState((prev) => ({
  //     expenses: { ...prev.expenses, [id]: value } }));
  // }

  changeHandle(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  execution() {
    const { expensesAction } = this.props;
    expensesAction(this.state);
    this.setState((oldState) => ({ id: oldState.id + 1 }));
  }

  handleChange({ target: { value } }) {
    this.setState(() => ({
      expenses: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  optionTag() {
    const options = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (options.map((option, index) => (
      <option key={ index } name={ option } id={ option }>
        { option }
      </option>
    )));
  }

  optionMethod(metodo) {
    const options = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (options.map((method, index) => (
      <option
        key={ index }
        value={ method }
        name={ metodo }
        id={ method }
      >
        {method}
      </option>
    )));
  }

  optionCurrency() {
    const { exchangeState } = this.props;
    return (exchangeState.filter((b) => b !== 'USDT')
      .map((option, index) => (
        <option key={ index } value={ option }>
          {option}
        </option>))
    );
  }

  valor() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          min="0"
          onChange={ this.changeHandle }
        />
      </label>
    );
  }

  descricao(description) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          value={ description }
          type="text"
          name="description"
          id="description"
          onChange={ this.changeHandle }
        />
      </label>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        {this.valor(value)}
        {this.descricao(description)}
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.changeHandle }
            // onClick={ () => saveCurrrency(expenses) }
          >
            {this.optionCurrency()}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            onChange={ this.changeHandle }

          >
            {this.optionMethod()}
          </select>
        </label>
        <label
          htmlFor="tag"
          onChange={ this.changeHandle }

        >
          Tag
          <select name="tag" id="tag">
            {this.optionTag()}
          </select>
          <button type="submit" onClick={ () => this.getCurrencyApi() }>
            Adicionar despesa
          </button>
        </label>
      </form>
    );
  }
}

Forms.propTypes = {
  expensesAction: PropTypes.func.isRequired,
  exchangeState: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExchangeRates: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  exchangeState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExchangeRates: () => dispatch(fetchExchangeRates()),
  expensesAction: (expenses) => dispatch(getExpenses(expenses)),
  // saveCurrrency: (expenses) => dispatch(resultCurrencyAction(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
