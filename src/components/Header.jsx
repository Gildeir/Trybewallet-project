import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.total = this.total.bind(this);
  }

  total() {
    let total = 0;
    const { expenses } = this.props;
    console.log(expenses);

    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += exchangeRates[currency].ask * value;
    });
    return total;
  }

  render() {
    const { userLogin, expenses } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            E-mail:
            { userLogin }
          </p>
          <p data-testid="total-field" name="expenses">
            Despesa Total:
            {' R$ '}
            {!expenses ? 0 : this.total()}

          </p>
          <p data-testid="header-currency-field" name="currency">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
