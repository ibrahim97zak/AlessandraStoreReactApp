import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  style from './Register.module.css'
import Header from '../Header/Header'
import Joi from 'joi';
import CustomInput from '../CustomInput/CustomInput';
import Loader from '../Loader/Loader';

function Register() {
  
  let [inputs,setInputs]= useState ({
  name: '',
  email: '',
  password: '',
  cPassword: ''
  });
  let [errors, setErrors] = useState({
    name: '',
  email: '',
  password: '',
  cPassword: ''
});
let registureSchema =  Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  name: Joi.string().min(5).required(),
  password: Joi.string().min(5).max(15).required(),
  cPassword:  Joi.string().required(),
});

//VALIDATION INPUT BY INPUT ON CHANGE  
let validateInput = (input,inputSchema) =>{
  return inputSchema.validate(input);
}
let onChange= (event)=>{
  let {name,value} = event.target;
  let validation = validateInput(value,registureSchema.extract(name));
  if (validation.error){
    setErrors({...errors,[name]:validation.error.details[0].message});
  }else{
    let err={...errors};
    delete err[name];  
    setErrors({...err})
  }
  setInputs({...inputs,[name]:value}); 
}
useEffect(()=>{
  console.log(inputs)


},[inputs])
let onSubmit = async(event)=>{
  event.preventDefault();
  let resultValidation = validationRegisterUser(inputs);
  console.log(resultValidation.error)
  const obj = {};
  
  let valErrors = resultValidation?.error?.details
  if (resultValidation.error){
    valErrors.map((er, i)=>{
      console.log(er.path)
      obj[er.path[0]] = er.message;
    })
    setErrors({...obj})

    }else if (Object.keys(errors).length===0 ){
    
    let result = await axios.post('https://kind-pink-sockeye-ring.cyclic.app/auth/signup',inputs);
    
    console.log(result);
    alert(' to continue your Registration Check your email to confirm your account')
  }
}
function validationRegisterUser (inputs){
  let schema =  Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    name: Joi.string().min(5).required(),
    password: Joi.string().min(5).max(15).required(),
    cPassword:  Joi.any().equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' }),
  });
  return schema.validate(inputs,{abortEarly: false});
}

  return (
    <>
    <div className={`container ${style.registure}`}>

    <div className='row d-flex align-items-center   mb-5'>
        <div className={`col-lg-8 ${style.slider} `}>
        <Header />

        </div>
        
        <div className='col-lg-4 pt-5'>
        <form onSubmit={onSubmit} className={`${style.form} `}>
  <span className={`${style.title}`}>Register</span>
  <CustomInput 
  error={errors.name}
  name="name"
  onChange={onChange}
  text ="enter your name"
  type="text"
  />
<CustomInput 
  error={errors.email}
  name="email"
  onChange={onChange}
  text ="enter your email"
  type="text"
  />
<CustomInput 
  error={errors.password}
  name="password"
  onChange={onChange}
  text ="enter your password"
  value={inputs.password}
  type="password"
  />
<CustomInput 
  error={errors.cPassword}
  name="cPassword"
  onChange={onChange}
  text ="confirm your password"
  value={inputs.cPassword}
  type="password"
  />
  <button type="submit" className={`${style.submit}`}>Register</button>  
</form>
        </div>

    </div>
    </div>
     </>
  )
}

export default Register