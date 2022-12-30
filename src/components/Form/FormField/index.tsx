import React from 'react';

import s from './styles.module.css';

interface Props {
  label?: React.ReactNode;
  error?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export const FormField = ({ label, children, description, error }: Props) => (
  <div className={s.field}>
    {label && <label className={s.label}>{label} </label>}
    <div className={s.inputWrapper}>{children}</div>

    {error && <div className={s.error}>{error}</div>}
    {description && <div className={s.description}>{description}</div>}
  </div>
);
