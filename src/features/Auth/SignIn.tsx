import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from '../../components/Alert';
import { Button } from '../../components/Button';
import { InputField } from '../../components/Form/fields';
import s from './styles.module.css';

const tempUser = {
  email: 'test@test.com',
  password: '12345678',
};

const login = async (email: string, password: string) => {
  if (email !== tempUser.email || password !== tempUser.password) {
    return {
      success: false,
      error: 'Email or password is incorrect',
    };
  }

  return {
    success: true,
    error: '',
  };
};

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [email, password]);

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault();

      const { success, error } = await login(email, password);

      if (!success) {
        setError(error);
      }

      alert('You successfully signed in!');
    },
    [email, password]
  );

  return (
    <div className={s.container}>
      <h1>Sign in</h1>

      <form className={s.form} onSubmit={handleSubmit}>
        {error && <Alert>{error}</Alert>}

        <InputField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={setPassword}
          required
          minLength={8}
        />

        <div className={s.actions}>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
};
