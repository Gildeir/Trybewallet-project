import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { type, value } }) {
    this.setState(() => ({
      [type]: value,
    }));
  }

  handleClick() {
    this.setState(() => {

    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="fname">
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite o email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <input
            data-testid="password-input"
            type="password"
            placeholder="Digite a senha"
            onChange={ this.handleChange }
            value={ password }
          />
          <button onClick={ this.handleClick } type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
