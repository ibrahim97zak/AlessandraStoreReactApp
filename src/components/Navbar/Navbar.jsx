import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navbar.module.css';
import cookie from 'react-cookies';

function Navbar({ user, setUser }) {
  //use reducer to cart counter
  let state = useSelector((state) => state.handleCart)

  //get category in navbar
  let [cats, setCats] = useState([]);
  let getCats = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products/categories");
    setCats(data);
  }
  useEffect(() => {
    getCats();
  }, []);
  //log-out
  let navigate = useNavigate();

  let logout = () => {
    setUser(null);
    cookie.remove("token")
    navigate('/Login')

  }
  return (
    <>
      <nav className={`navbar ${style.navbar} ${style.navcol} navbar-expand-lg bg-light fixed-top `}>
        <div className="container">
          <div className={`navbar-brand ${style.logo}`} ></div>
          {user ?(<>
            <div className={`navbar-nav mx-3 ms-auto ${style.cartSm}`}>
            <Link className="nav-link" to='Cart' ><i className={`fa-solid fa-cart-shopping px-1 ${style.cartIcon}  `} /></Link>
            <span className={`${style.cartNotify}`}>{state.length}</span>
          </div>
          </>):(<>
          </>)}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user ? (<>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='Home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='products'>products</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  categories
                </a>
                <ul className="dropdown-menu">
                  {cats.map((cat, i) =>
                    <Link to={`/category/${cat}`} className=' btn text-uppercase w-100 ' key={i}>{cat}</Link>
                  )}
                </ul>
              </li>

            </ul>
          </>): <>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

          <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='Home'>Home</Link>
              </li>
          </ul>
          </>}
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center"  >
              {user ? (
              <>
                <li className="nav-item" onClick={logout}>
                  <a className="nav-link" href="#">logout</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/list">Users</Link>
                  </li>
                  <li className={`nav-item d-none d-sm-none d-md-none d-lg-block `}>
                    <Link className={`nav-link ${style.catButn}`} to='Cart' >My Cart<i className={`fa-solid fa-cart-shopping px-1  ${style.cartIcon} `} /></Link>
                    <span className={`${style.cartNotify}`}>{state.length}</span>
                  </li>
              </>
                ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to='Register'>register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='Login'>login</Link>
                  </li>
                 
                </>)}
            </ul>





          </div>
        </div>
      </nav>
    </>


  )
}

export default Navbar