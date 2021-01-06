import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Label, StyledInput } from './styles';

interface IInputProps {
  name: string;
  title: string;
  type?: string;
  maxLength?: number;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({ name, title, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Label>
      {title}
      <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Label>
  );
};

export default Input;
