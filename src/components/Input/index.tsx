import React from 'react';
import s from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const Input = (props: Props) => <input {...props} className={s.input} />;
