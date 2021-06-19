import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginData } from '../actions';
import Header from '../components/Header';
import Form from '../components/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br />
        <Form />
        <br />
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(loginData(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
