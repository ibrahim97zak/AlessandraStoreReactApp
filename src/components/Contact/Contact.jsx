import React from 'react'

function Contact() {
  return (
    <div>
         <div className="contact_section layout_padding">
  <div className="container">
      <div className=" d-flex flex-column justify-content-between align-items-center p-4 ">
        <h1 className="contact_taital text-light">Get In Touch</h1>
        <p className="contact_text text-light">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  eu </p>
      </div>
    </div>

  <div className="map_main">
    <div className="map-responsive">
      <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={400} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact