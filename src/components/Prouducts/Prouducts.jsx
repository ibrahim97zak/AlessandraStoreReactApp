import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import stylex from './Prouducts.module.css'
import Loader from '../Loader/Loader';

function Prouducts() {
    let [Prouducts, setProuducts] = useState([]);
    let [search, setSearch] = useState('');
    let [loading,setLoading]= useState(true);
    let [cuurentPage, setCurentPage] =useState(1);
    let componentMounting = true;
     let windowSize = window.innerWidth;
       
    let getProuducts = async () => {
        let { data } = await axios.get("https://fakestoreapi.com/products")
        setTimeout(()=>{
            setLoading(false)
            setProuducts(data);
         
          },)
    }
    let [sortval, setSort] = useState({
        title: 'title',
        description: 'description',
        price: 'price',
        category: 'category'

    })
    let sortProducts = async () => {
        let { data } = await axios.get("https://fakestoreapi.com/products?sort=desc")
        console.log(data)
    }
    useEffect(() => {
        sortProducts();
        getProuducts();
    }, [])
    
    //paginitaion 
    let prodPerPage;
    console.log(windowSize)
    switch(true){
        case windowSize>992:
            prodPerPage=3;
            console.log('hi')
           
            break;
            case  windowSize > 768:
                prodPerPage=2;
            break;
            case windowSize < 576:
                prodPerPage=2;
            break;
    }
    const pages = Math.ceil(Prouducts.length/ prodPerPage);
    const startIndex =(cuurentPage - 1)*prodPerPage;
    const finishIndex = (cuurentPage)* prodPerPage;
    const orderdProduct = Prouducts.slice(startIndex,finishIndex)
   
    return (
        <>

            <div className=' d-flex flex-column justify-content-center align-items-between mt-5 pt-5 mb-2 '> 
            <div className="  d-flex justify-content-center ">
                <div className={`col-lg-6  d-flex justify-content-center`}>
                    <div className="input-group d-flex justify-content-center">
                        <div className={`form-outline bg-secondary  `}>
                            <input name='pname' value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" id="form1" className={`form-control ${stylex.schbar}`} />
                            <label className="form-label" htmlFor="form1">Search</label>
                        </div>
                        <button type="button" className="btn btn-primary bg-danger">
                            <i className="fas fa-search " />
                        </button>
                    </div>


                </div>
            </div>
            <div className=' flex-wrap   pb-4'>
                <div className={`row m-0`}>
                    {loading ?(<>
                    <Loader />
                    </>):(<>
                        {orderdProduct.filter((product) => {

if (search == "") {
    return product;
} else if (product.title.toLowerCase().includes(search.toLowerCase())) {
    return product;

}
})
.map((product, index) =>

    <div key={index} className={`col-lg-4 col-md-6 col-sm-6  my-4 row ${stylex.row} d-flex justify-content-center `}>
        <div className={`card ${stylex.cardsty}   `}>
            <div className='bg-image hover-zoom ripple ripple-surface ripple-surface-light'>

                <img src={product.image} className={`card-img-top ${stylex.imagesty}  `} alt={product.title}  />
                <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                </div>
                <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-danger ms-2">New</span></h5>
                    </div>
                </div>


            </div>

            <div className="card-body">
                <h5 className={`card-title ${stylex.titsty}`}>{product.title}</h5>

            </div>
            <ul className="list-group list-group-flush d-flex justify-content-center align-items-center">
                <li className="list-group-item">Price: {Math.round(product.price)} $</li>
                <li className="list-group-item">{product.category}</li>
                <Link to={`/product/${product.id} `} className='btn btn-danger text-align-center' style={{ width: '8.1rem' }}>order now
                </Link>
            </ul>
        </div>
    </div>




)}
                    </>)}
                   
                </div>
        </div>
        <Pagination pages={pages} cuurentPage={cuurentPage} setCurentPage={setCurentPage} />
        </div>
        </>
    )
}

export default Prouducts