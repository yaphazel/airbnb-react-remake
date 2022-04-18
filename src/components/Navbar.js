import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
import LanguageModal from './LanguageModal';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="navbar__container container-fluid">
          <a className="navbar__container__brand navbar-brand m-2" href="#">
            <img className="navbarLogo" src="/airbnb-icon.png" alt="" width="34px"  />
          </a>    
          <div className="sideBar">
            <ul className="sideBar__links navbar-nav d-flex flex-row">
              <li className="sideBar__links__host nav-item mx-2">
                <a href="#" id="become-host-link" className="sideBar__host__button btn nav-link text-light" role="button">Become A Host</a>
              </li>
              <li className="sideBar__links__langauge nav-item mx-2">
                <button type="button" id="language-link" className="sideBar__langauge__button btn nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <img src="/language-icon.png" alt="" width="20px" />
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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