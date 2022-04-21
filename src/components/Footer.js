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
      <div className="footerSocial container-fluid">
        <div className="footerSocial mx-2 my-2 row justify-content-xl-between">
          <div className="footerSocial__media order-xl-last col-12 col-xl-6 justify-content-xl-end justify-content-md-center justify-content-start">
            <a className="footerSocial__media__language px-3"><img src="./language-icon-black.png" alt="" width="18px" /> English(US) </a>
            <a className="footerSocial__media__currency px-3"><span>$</span>HKD</a>
            <a className="footerSocial__media__social px-2"><img src="./facebook.png" alt="" width="22px" /></a>
            <a className="footerSocial__media__social px-2"><img src="./twitter.png" alt="" width="22px" /></a>
            <a className="footerSocial__media__social px-2"><img src="./instagram.png" alt="" width="22px" /></a>
          </div>
          <div className="footerSocial__copyright py-2 order-xl-first col-12 col-xl-6 justify-content-xl-start justify-content-md-center justify-content-start">
            <div className="footerSocial__copyright__title px-3">
              <p className="footerSocial__copyright__copyright">&copy; 2022 Airbnb, Inc. </p>
            </div>
            <div className="footerSocial__copyright__links">
              <a className='ps-2 d-flex flex-row text-decoration-none'><span className='pe-1'>⋅</span> Privacy </a>
              <a className='ps-2 d-flex flex-row text-decoration-none'><span className='pe-1'>⋅</span> Terms </a>
              <a className='ps-2 d-flex flex-row text-decoration-none'><span className='pe-1'>⋅</span> Sitemap </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;