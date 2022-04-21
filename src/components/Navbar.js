import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
import LanguageModal from './LanguageModal';

const Navbar = () => {
  const [navBar, setNavBar] = useState(false)

  const scrollPage = () =>{
    if(window.pageYOffset > 0){
      setNavBar(true)
    }
    else{
      setNavBar(false)
    }
  };
  
  window.addEventListener('scroll', scrollPage);
  return (
    <div className="navSection">
      <nav className={ navBar ? "navSection__nav navbar navbar-expand-xl bg-light fixed-top" : "navSection__nav navbar navbar-expand-xl navbar-dark bg-dark"}>
        <div className="navbar__nav__container container-fluid">
          <a className="navbar__container__brand navbar-brand m-2" href="#">
            <img className={ navBar ? "navbarLogo__pink ps-1" : "navbarLogo"} src={ navBar ? "/airbnb-icon-pink.png" : "/airbnb-icon.png"} alt="" width="36px"  />
          </a>    
          <div className="navbar__nav__sideBar">
            <ul className="navbar__sideBar__links navbar-nav d-flex flex-row">
              <li className="sideBar__links__host nav-item mx-2">
                <a href="#" id="become-host-link" className={navBar ? "sideBar__host__button btn nav-link text-dark px-2" : "sideBar__host__button btn nav-link text-light px-2"} role="button">Become A Host</a>
              </li>
              <li className="sideBar__links__langauge nav-item mx-2">
                <button type="button" id="language-link" className="sideBar__langauge__button btn nav-link px-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <img src={ navBar ? "language-icon-black.png" : "/language-icon.png"} alt="" width="20px" />
                </button>
                <div className="sideBar__language__modal modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <LanguageModal/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="sideBar__links__dropdown dropdown nav-item mx-2">
                <button type="button" className="btn btn-light btn-sm rounded-pill" data-bs-toggle="dropdown" id="dropdownMenuButton" aria-expanded="false">
                  <span className="p-1"><FontAwesomeIcon icon={faBars} size="sm" /></span>
                  <img src="profile-icon.png" alt="" width="30px" className="ms-2"/>
                </button>
                <div className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item" type="button"><strong>Sign up</strong></button>
                  <button className="dropdown-item" type="button">Log In</button>
                  <hr />
                  <button className="dropdown-item" type="button">Host Your Home</button>
                  <button className="dropdown-item" type="button">Host An Experience</button>
                  <button className="dropdown-item" type="button">Help</button>
                </div>
              </li>
            </ul>
          </div> 
        </div>
      </nav>
    <SearchBar/>
    </div>
 
  )
}


export default Navbar;