import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <form>
        <label htmlFor>
          Valor
          <input type="text" name="name" />
        </label>
        <label htmlFor>
          Descrição
          <input type="text" name="name" />
        </label>
        <label htmlFor>
          Moeda
          <select>
            <option> ; </option>
          </select>
        </label>
        <label htmlFor>
          Método de pagamento
          <select>
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor>
          Tab:
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
