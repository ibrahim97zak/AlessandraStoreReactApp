import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Styles from './About.module.css';
function About() {
  let [ProudLimts, setProudLimts] = useState([]);
  let getProuductLimits = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products/category/jewelery?limit=3")
    setProudLimts(data)
  }
  useEffect(() => {
    getProuductLimits();
  }, [])
  return (
    <>
      <div className={`${Styles.About}`}>
        <div className={`${Styles.aboutSection} ${Styles.layoutPadding} mb-4`}>
          <div className="container">
            <div className={`${Styles.aboutSectioMain}`}>
              <div className={`row ${Styles.rowmob}`}>
                <div className="col-md-6">
                  <div className={`${Styles.aboutTaitalMain}`}>
                    <h1 className={`${Styles.aboutTaital}`}>About Our store</h1>
                    <p className={`${Styles.aboutText}`}>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <div className={`${Styles.readmoreBt}`}><a href="#">follow us</a></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div><img src={`${process.env.PUBLIC_URL}/images/pose1.jpg`} className={`${Styles.image3}`} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <h2 className={`${Styles.glow}`}>Hot new this week</h2>
      <div className=' flex-wrap   pb-4'>
                <div className={`row m-0`}>
                    {ProudLimts.map((product, index) =>

                            <div key={index} className={`col-lg-4 col-md-4 col-sm-6  mt-4 row ${Styles.row} d-flex justify-content-center `}>
                                <div className={`card ${Styles.cardsty}   `}>
                                    <div className='bg-image hover-zoom ripple ripple-surface ripple-surface-light'>

                                        <img src={product.image} className={`card-img-top ${Styles.imagesty}  `} alt={product.title}  />
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
                                        <h5 className={`card-title ${Styles.titsty}`}>{product.title}</h5>

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
                </div>
        </div>
    </>
  )
}

export default About