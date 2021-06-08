import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite o email"
            />
          </label>
          <input
            data-testid="password-input"
            type="password"
            placeholder="Digite a senha"
          />
          <button type="submit">Entre</button>
        </form>
      </div>

    );
  }
}

export default Login;
