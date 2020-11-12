import { Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context'
import { api } from '../../config/api';

import './Login.css';

const UserLogin = () => {
  const { setToken } = useContext(StoreContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function onSubmit(event: any) {
    event.preventDefault();
    const response = await api.post('sessions', { email, password });
    console.log("res", response);
    if (response.data.status === "Ok") {
      setToken(response.data.token)
      return history.push('/')
    } else {
      alert(response.data.message)
    }

    setEmail('');
    setPassword('')
  }



  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form id='login-form' autoComplete="nope" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" form="login-form" variant="contained" color="primary">
          Logar
        </Button>
      </form>
    </div>
  );
};

export default UserLogin;