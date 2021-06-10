import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions';
import Logo from '../image/Trybe_logo-baixa.png';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <form>
          <header>
            <img
              src={ Logo }
              width="150x"
              alt="trybe_logo"
            />
            <label htmlFor="email" data-testid="email-field">
              Email:
              { email }
            </label>
            <label htmlFor="total" data-testid="total-field">
              Depesa total gerada:
              <input type="number" value={ 0 } />
            </label>
            <label htmlFor="currency" data-testid="header-currency-field">
              Câmbio:
              <input type="text" value="BLR" />
            </label>
          </header>
        </form>

      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(login(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
