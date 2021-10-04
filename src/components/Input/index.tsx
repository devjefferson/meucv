import React, { InputHTMLAttributes } from 'react';

// import { Container } from './styles';

export interface InputComponent extends InputHTMLAttributes<HTMLInputElement>{
  title: string
}

function InputComponent({title, ...props}:InputComponent){
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input {...props}/>
    </div>
  )
}

export default InputComponent;