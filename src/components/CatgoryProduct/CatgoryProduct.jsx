import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import stylex  from './CatgoryProduct.module.css'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

import { useParams } from 'react-router-dom';

function CatgoryProduct() {
    let[catProduct,setCatProduct] = useState([]);
    let [cuurentPage, setCurentPage] =useState(1);
    let params = useParams();
    console.log(params);
    let getProduct = async ()=>{
        let{data}= await axios.get(`https://fakestoreapi.com/products/category/${params.name}`)
        setCatProduct(data);
    }
    
    useEffect(()=>{

    getProduct();
    },[params]);
    //paginitaion 
    const prodPerPage =3;
    const pages = Math.ceil(catProduct.length/ prodPerPage);
    const startIndex =(cuurentPage - 1)*prodPerPage;
    const finishIndex = (cuurentPage)* prodPerPage;
    const orderdProduct = catProduct.slice(startIndex,finishIndex)
  return (
    <div>
                  <h1 className={`${stylex.catbg}d-flex justify-content-center align-items-center  text-white p-4 text-uppercase mt-5 `}>{params.name}</h1>
                  <div className=' flex-wrap justify-content-between align-items-center mb-5 pb-5'>
                <div className={`row ${stylex.row} m-0`}>
                    {orderdProduct.map((product, index) =>
                        

                            <div className={`col-lg-4 col-sm-6 mb-4 mt-4 row ${stylex.row} d-flex justify-content-center `}  key={index}>
                                <div className={`card ${stylex.cardsty}  `}>
                                    <img src={product.image} className={`card-img-top ${stylex.imagesty} `} alt={product.title} />
                                    <div className="card-body">
                                        <h5 className={`card-title ${stylex.titsty}`}>{product.title}</h5>

                                    </div>
                                    <ul className="list-group list-group-flush d-flex justify-content-center align-items-center">
                                        <li className="list-group-item">Price: {product.price}</li>
                                        <li className="list-group-item">{product.category}</li>
                                        <Link to={`/product/${product.id} `} className='btn btn-danger text-align-center' style={{ width: '8.1rem' }}>order now<i className="fa-solid fa-cart-shopping px-1" />
                                        </Link>
                                    </ul>
                                </div>
                            </div>




                        )}
                </div>

            </div>
            <Pagination pages={pages} cuurentPage={cuurentPage} setCurentPage={setCurentPage} />
    </div>
  )
}

export default CatgoryProduct