import { useState } from 'react';
import { InputViewer } from './style/StInput';


export const useInput = (prefill) => {
  const [value, setValue] = useState('');
  const placeholder = prefill;
  const onChange = (e) => setValue(e.target.value);

  return { value, placeholder, onChange }
}

export const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <InputViewer 
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    /> 
  )
}