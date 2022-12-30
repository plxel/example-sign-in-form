import React from 'react';
import s from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export const Alert = ({ children }: Props) => (
  <div className={s.alert}>{children}</div>
);
