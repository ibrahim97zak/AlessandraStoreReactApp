import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

function ProductDetails() {
  let params = useParams();
  let[product,setProuduct]= useState('');
  let [loading,setLoading]= useState(true);
  let getProduct = async()=>{
    let{data}= await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setTimeout(()=>{
      setLoading(false)
      setProuduct(data)
      
   
    },)
  }
  let dispatch = useDispatch();
  let addProduct =(item)=>{
    dispatch(addToCart(item));
  }
  
  useEffect (()=>{
    getProduct();
    
  })
  
  
  return (
    
    <div className='container'>
      {loading ? (<>
      <Loader />
      </>):(<>

      <div className={`product-cont d-flex justify-content-between align-items-center mt-5 mb-5 p-5 ${style.prodetails}`}>
      <div className="product-image p-2  ">
        <img src={product.image} style={{height:'200px', width: '16rem',borderRadius: '1rem'}}></img>
      </div>
      <div className="product-desc">
       <h2 className='text-dark'> {product.title}</h2>
       <p className="card-text text-dark">{product.description}</p>
       <h5 className='text-dark'>category : {product.category}</h5> 
       <h4 className='text-dark'>{Math.round(product.price)}$</h4>
       <button onClick={()=>addProduct(product)} className='btn btn-danger'>add to cart <i className="fa-solid fa-cart-shopping px-1" /></button>
      </div>
      </div>
      </>)}
      </div>
  )
}

export default ProductDetails