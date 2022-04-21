import React from 'react'

function Footer() {

  return (
    <div className="footerSection container-fluid"> 
      <div className="footerSection__wrapper m-5 row row-cols-lg-4">
        <div className="footerSection__wrapper__container my-2">
          <p className="footerSection__container__title" >Support</p>
          <div className="footerSection__container__content row row-cols-md-3 row-cols-lg-1">
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Supporting people with disabilities</p>
            <p>Report a neighborhood concern</p>
          </div>
        </div>
        <hr className="footerSection__seperator"/>
        <div className="footerInspo__section my-2">
          <p className="footerSection__container__title" >Community</p>
          <div className="footerSection__container__content row row-cols-md-3 row-cols-lg-1">
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
          </div>
        </div>
        <hr className="footerSection__seperator"/>
        <div className="footerInspo__section my-2">
          <p className="footerSection__container__title">Hosting</p>
          <div className="footerSection__container__content row row-cols-md-3 row-cols-lg-1">
            <p>Try hosting</p>
            <p>AirCover: protection for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>         
          </div>
        </div>
        <hr className="footerSection__seperator"/>
        <div className="footerInspo__section my-2">
          <p className="footerSection__container__title">About</p>
          <div className="footerSection__container__content row row-cols-md-3 row-cols-lg-1">
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Airbnb Luxe</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footerSocial">
        <div className="footerSocial__copyright">
          <a className="btn"><img src="./language-icon-black.png" alt="" width="15px" /> English(US) </a>
          <a className="btn"><span>$</span>HKD</a>
          <a className="btn"><img src="./facebook.png" alt="" width="25px" /></a>
          <a className="btn"><img src="./twitter.png" alt="" width="25px" /></a>
          <a className="btn"><img src="./instagram.png" alt="" width="25px" /></a>
        </div>
        <div className="footerSocial__media d-flex flex-row">
          <p>&copy; 2022 Airbnb, Inc. </p>
          <div className="d-flex flex-row">
            <p className='ps-2'><span>⋅</span> Privacy </p>
            <p className='ps-2'><span>⋅</span> Terms </p>
            <p className='ps-2'><span>⋅</span> Sitemap </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;