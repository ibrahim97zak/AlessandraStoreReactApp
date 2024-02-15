import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import cookie from 'react-cookies';



import style from './Cart.module.css'
import { delToCart } from '../../redux/action';


const Cart = () => {
 
  let state = useSelector((state)=> state.handleCart)


  let dispatch = useDispatch();
  let total=0;
  console.log(total)
  
  let removeItem =(item)=>{

    dispatch(delToCart(item));
    console.log(item)
  }
  
  console.log()
  
    return (
      
      
        <div>
<section className={`h-100  h-custom ${style.hcustom}`} style={{backgroundColor: '#FEF7E7'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className={`card card-registration ${style.cardRegistration} card-registration-2 ${style.cardRegistration2}`} style={{borderRadius: 15}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className={`fw-bold mb-0 text-black ${style.shoptitle}`}>Shopping Cart</h1>
                  </div>
                  <hr className="my-4" />
                  {state.map((item, i) =>
                  <div className={`row mb-4 d-flex justify-content-center align-items-center`} key={i}>
                    
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={item.image} className={`img-fluid rounded-3 ${style.imgitem}`} alt={item.title} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 absolute">
                      <h6 className="text-muted">{item.title}</h6>
                      <h6 className="text-black mb-0">{item.category}</h6>
                    </div>
                    
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0 fs-4">{Math.round(item.price)} $</h6>
                    </div>
                    <div className=" col-md-1 col-lg-1 col-xl-1 text-end d-flex  justify-content-center align-items-center ">
                      <button onClick={()=>removeItem(item)} className=" btn btn-danger text-white  d-flex justify-content-between align-items-center px-2">delete</button>
                    </div>
                  </div>
                  )}
                
                </div>
              </div>
              <div className={`col-lg-4 bg-grey ${style.bggrey}`}>
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="fs-3">{state.length} items </h5>
                    
                  </div>
                 
                  <h5 className="text-uppercase mb-3">Give code</h5>
                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>{state.forEach(ele => {
                      total +=ele.price;
                    })
                    
                    }
                    { Math.round(total)} $</h5>
                  </div>
                  <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">confirm your order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Cart;
