import React from 'react';

export const Input = ({type, value, error, helperText, onChange, placeholder, name}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      {error && <div className='input_error'>{error}</div>}
      {helperText && <div className='input_helperText'>{helperText}</div>}
    </>
  );
};
