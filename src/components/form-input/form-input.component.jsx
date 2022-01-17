import React from 'react';

import { FormGroup, FormInputContainer, Label } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroup>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <Label length={otherProps.value.length}>{label}</Label> : null}
  </FormGroup>
);

export default FormInput;
