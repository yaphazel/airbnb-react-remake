import React from 'react'

function Footer() {
  return (
    <div>
      <div className="footerInspo m-5 d-flex flex-column flex-md-row">
        <div className="footerInspo__section m-5">
          <h5>Support</h5>
          <div className="d-flex flex-row flex-md-column">
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Supporting people with disabilities</p>
            <p>Report a neighborhood concern</p>
          </div>
        </div>
        <div className="footerInspo__section m-5">
          <h5>Community</h5>
          <div className="d-flex flex-row flex-md-column">
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
          </div>
        </div>
        <div className="footerInspo__section m-5">
          <h5>Hosting</h5>
          <div className="d-flex flex-row flex-md-column">
            <p>Try hosting</p>
            <p>AirCover: protection for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>         
          </div>
        </div>
        <div className="footerInspo__section m-5">
          <h5>About</h5>
          <div className="d-flex flex-row flex-md-column">
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Airbnb Luxe</p>
          </div>
        </div>
      </div>
      <div className="footerSocial">
        <a className=""><img src="./language-icon-black.png" alt="" width="15px" /> English(US) </a>
        <a><span>$</span> HKD </a>
        <p>&copy; 2022 Airbnb, Inc. </p>
        
      </div>
    </div>
  )
}

export default Footer;