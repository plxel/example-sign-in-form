import React, { useCallback } from 'react';
import { FormField } from '../FormField';
import type { FormControl } from '../types';
import { Input } from '../../Input';

interface Props
  extends Omit<React.ComponentProps<typeof Input>, 'onChange'>,
    FormControl {
  value: string;
  onChange: (value: string) => void;
}

export const InputField = ({
  name,
  label,
  description,
  value,
  onChange,
  ...otherInputProps
}: Props) => {
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <FormField label={label} description={description}>
      <Input
        name={name}
        value={value}
        onChange={handleChange}
        {...otherInputProps}
      />
    </FormField>
  );
};
