import React from 'react'
import styfot from './Footer.module.css'

function Footer() {
  return (
    <div>
      
  <div className={`${styfot.footer_section} ${styfot.layout_padding}`}>
    <div className="container">
      <div className={`${styfot.footer_logo}`}><a href="index.html"><img src="images/footer-logo.png" /></a></div>
      <div className={`${styfot.contact_section_2}`}>
        <div className="row">
          <div className="col-sm-4">
            <h3 className={`${styfot.address_text}`}>Contact Us</h3>
            <div className={`${styfot.address_bt}`}>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true" /><span className={`${styfot.padding_left10}`}>Address : Loram Ipusm</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true" /><span className={`${styfot.padding_left10}`}>Call : +01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true" /><span className={`${styfot.padding_left10}`}>Email : demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center mt-2">
            <div className={`${styfot.footer_logo_1}`}>
              </div>
            <p className={`${styfot.dummy_text}`}>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center justify-content-between">
            <div className={`${styfot.main}`}>
              <h3 className={`${styfot.address_text}`}>Best Products</h3>
              <p className={`${styfot.ipsum_text}`}>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styfot.social_icon}`}>
        <ul>
          <li>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className={`${styfot.copyright_section}`}>
    <div className="container">
      <p className={`${styfot.copyright_text}`}>2020 All Rights Reserved. Design by</p>
    </div>
  </div>
</div>

      
    
  )
}

export default Footer