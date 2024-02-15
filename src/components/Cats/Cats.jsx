import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Cats() {
    let [cats,setCats]= useState([]);
    let getCats = async ()=>{
        let {data} = await axios.get("https://fakestoreapi.com/products/categories");
        setCats(data);
    }
    useEffect( () => {
        getCats();
    }, []);

  return (
    <div>
        <h2>all catagories</h2>
        <div className='d-flex justify-content-between align-items-center pb-4 '>

        {cats.map((cat,i)=>
            <div className='cat' key={i}>
                <Link to={`/category/${cat}`} className=' btn btn-primary'>{cat}</Link>
                 
            </div>
        )}
        </div>
        </div>
  )
}

export default Cats