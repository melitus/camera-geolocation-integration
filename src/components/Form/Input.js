import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ input, ...rest }) =>
  <TextInput {...rest}  {...input} />;

export default Input;
