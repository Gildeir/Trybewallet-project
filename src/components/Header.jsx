import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginData } from '../actions';
import Logo from '../image/Trybe_logo-baixa.png';

class Header extends React.Component {
  render() {
    const total = 0;
    const currency = 'BRL';
    const { email } = this.props;
    return (
      <header>
        <img src={ Logo } width="150x" alt="trybe_logo" />
        <span data-testid="email-field">
          {` Login: ${email}`}
        </span>
        <span data-testid="total-field">
          {` Total: ${total}`}
        </span>
        <span data-testid="header-currency-field">
          {` Currency: ${currency}`}
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(loginData(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
