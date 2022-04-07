import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="navbarLogo" src="/airbnb-icon.png" alt="" width="35px"  />
          </a>
          <div class="searchBar">
            <ul class="navbar-nav">
              <li class="nav-item mx-1">
                <a href="#" aria-current="page" id="place-to-stay-link" class="nav-link text-light">Places to stay</a>
              </li>
              <li class="nav-item">
                <a href="#" id="experiences-link"  class="nav-link text-light">Experiences</a>
              </li>
              <li class="nav-item">
                <a href="#" id="online-experiences-link" class="nav-link text-light">Online Experiences</a>
              </li>
            </ul>
            {/* <form class="d-flex">
              <label htmlFor=""></label>
              <input class="form-control me-2" type="search" placeholder="Where are you going?" aria-label="Search"/>
              <button class="btn btn-danger" type="submit">Add dates</button>
              <button class="btn btn-danger" type="submit">Add dates</button>
              <button class="btn btn-danger" type="submit">Add guests</button>
              <button class="btn btn-danger" type="submit"><img src="/search-icon.png" alt="" width="30px"/></button>
            </form>  */}
          </div>      
          <div class="sideBar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" id="become-host-link" class="becomehostLink btn nav-link text-light" role="button">Become A Host</a>
              </li>
              <li class="nav-item">
                <button id="language-link" class="languageLink btn nav-link"><img src="/language-icon.png" alt="" width="20px" /></button>
              </li>
              <li class="nav-item">
                <div class="btn-group">
                  <button class="sideMenu btn btn-light btn-sm rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                    <img src="profile-icon.png" alt="" width="30px" class="ms-2"/>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li class="dropdown-item">
                      <a href="#" id="sign-up-link" class="nav-link"><strong>Sign up</strong></a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" id="log-in-link"  class="nav-link">Log In</a>
                    </li>
                    <hr/>
                    <li class="dropdown-item">
                      <a href="#" aria-current="page" id="host-your-home-link" class="nav-link">Host Your Home</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" id="host-an-experience-link" class="nav-link">Host An Experience</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" id="help-link" class="nav-link">Help</a>
                    </li>
                  </ul>
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