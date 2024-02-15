import React from 'react'
import { Link } from 'react-router-dom';
import About from '../About/About'
import Contact from '../Contact/Contact';
import style from  './Home.module.css';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div>
     <div className={`p-5 text-center bg-image ${style.bgimage}`} style={{backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/cb6e66110135607.5ffb2cb12711a.jpg")', height: 700}}>
  <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
    <div className="d-flex justify-content-center align-items-center">
      <div className={`text-white ${style.headTitle}`}>
        <h1 className="mb-3">Alessandra store</h1>
        <h4 className="mb-3"> keep yourself <TypeAnimation
      sequence={[
        'style ', // Types 'One'
        1000, // Waits 1s
        'chick', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'cool',
        3000, // Types 'Three' without deleting 'Two'
        () => {
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block' }}
    /></h4>
        <Link className="btn btn-outline-light btn-lg" to ='/products' role="button">see the new arriavals</Link>
      </div>
    </div>
  </div>
</div>


      <About />
      <Contact />

    </div>
  )
}

export default Home