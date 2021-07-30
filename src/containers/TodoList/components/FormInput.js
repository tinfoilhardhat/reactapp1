import React from 'react'
import { Input } from '../../Home/styles'
const FormInput = ({ type, placeholder, value, setValue}) => {
   return (
    <Input type={type} placeholder={placeholder} value={value}
    onChange={e => setValue(e.target.value)}/>
   )
}

export default FormInput