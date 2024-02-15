import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import style from  './Login.module.css'
import cookie from 'react-cookies';
import { Link,useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';


function Login({logUser}) {
    let [loading,setLoading]= useState(false);
    let navigate = useNavigate();
    let [msgAlert,setAlert] =useState()
    let [user,setUser]= useState({
        email:"",
        password:"",
    });
    let [errors,setErrors]=useState([]);  
    let validateUser = ()=>{
        let schema= Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        });
        return schema.validate(user,{abortEarly:false});
    }
    let onChange= (event)=>{
        setUser({...user,[event.target.name]:event.target.value});
       
    };
    let submitForm = async (event)=>{
        event.preventDefault();
        let validation =validateUser();
        let errorList=[];
        if(validation.error){
            validation.error.details.map(err =>{
                errorList.push(err.message);
            });    
            setErrors(errorList);

        }else{
            setErrors([]);
            let result= await axios.post("https://kind-pink-sockeye-ring.cyclic.app/auth/login",user).catch(error => {
                setAlert("this email does not exist");
            })
            console.log(result)
            if(result.data.message==="Done"){
                let expires = new Date();
                let futureDate = expires.getDate()+1;
                expires.setDate(futureDate);
                cookie.save("token",result.data.token,{expires});
                 logUser(result.data.token)
                 setAlert('')
                 navigate('/Home')
                 
//img22zak@gmail.com
                 alert('logged in succesfully')

        }else{
            setAlert('Incorrect password')
        }
    }
    
    };
    
    return (
        <>
        <div className={` ${style.formBground} d-flex d-flex justify-content-center align-items-center  vh-100`}>
            <form method="POST" action="/handleLogin" className={`${style.form}`} onSubmit={submitForm}>
                
  <span className={`${style.title}`}>Login</span>
 
  {errors.map((error,i) => (
                     <div className={` ${style.alert} text-danger`} role="alert" key={i}>
                    {error}
                  </div>
                ) )}
  <label htmlFor="email" className={`${style.label}`}>Email</label>
  <input onChange={onChange} type="email" id="email" name="email"  className={`${style.input}`} />

  <label htmlFor="password" className={`${style.label}`}>Password</label>
  <input onChange={onChange} type="password" id="password" name="password"  className={`${style.input}`} />
  { msgAlert&&
    
  <div className={` ${style.alert} text-danger`} role="alert">{msgAlert}</div>
  }
                    
                  

  <button type="submit" className={`${style.submit}`}>Login</button>
  <h6 className='pt-2'>you dont have account ?</h6>
  <Link  to='/Register'>register now!</Link>
</form>

        </div>
        </>
    )
}

export default Login