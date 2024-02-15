import React from 'react'
import style from './CustomInput.module.css'

function CustomInput({text,type,name,onChange,error}) {
  return (
    <div>
        <label htmlFor="exampleInputEmail1" className={`${style.label}`}>{name}</label>
  <input 
  onChange={onChange}
  placeholder={text}
   type={type}
   name={name}
    className={`${style.input}`} />

  {error &&(
  <div className={` ${style.alert} text-danger `} role="alert">
                    {error}
                  </div>)}
    </div>
  )
}

export default CustomInput