import React from 'react'

export default function input(props) {

    const{ name, lable, value, onchange} = props;

  return (
    <TextField 
    fullWidth 
    label={lable} 
    name={name} 
    value={value}
    onChange={onchange}  
    required/>
  )
}
