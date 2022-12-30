import React from 'react';
import s from './styles.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Props) => (
  <button {...props} className={s.button} />
);
