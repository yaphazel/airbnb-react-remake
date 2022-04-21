import React, { useState } from 'react'

function SearchBar() {
  const [searchBar, setSearchBar] = useState(false)
  
  const scrollPage = () =>{
    if(window.pageYOffset > 0){
      setSearchBar(true)
    }
    else{
      setSearchBar(false)
    }
  };
  
  window.addEventListener('scroll', scrollPage);
  return (
    <div className="searchBar mt-4" id="searchBar" >
      <ul className={ searchBar ? "searchBar__lists -none mb-4 nav nav-pills justify-content-center" : "searchBar__lists mb-4 nav nav-pills justify-content-center"} id="pills-tab">
        <li className="searchBar__lists__item mx-4 nav-item">
          <a href="" className="searchBar__item__link nav-tab active text-light" id="places-to-stay-tab" aria-current="page" data-bs-toggle="tab" data-bs-target="#places-to-stay" type="button" role="tab" aria-controls="places-to-stay" aria-selected="true">Places To Stay</a>
        </li>
        <li className="searchBar__lists__item mx-4  nav-item">
          <a href="" className="searchBar__item__link nav-tab text-light" id="experiences-tab" data-bs-toggle="tab" data-bs-target="#experiences" type="button" role="tab" aria-controls="experiences" aria-selected="false">Experiences</a>
        </li>
        <li className="searchBar__lists__item mx-4  nav-item">
          <a href="" className="searchBar__item__link nav-tab text-light">Online Experiences</a>
        </li>
      </ul>
      <div className={ searchBar ? "searchBar__content -none tab-content" : "searchBar__content tab-content"} id="myTabContent">
        <div className="searchBar__content__panel tab-pane fade show active" id="places-to-stay" role="tabpanel" aria-labelledby="places-to-stay-tab">
          <div className="searchBar__panel__wrapper">
            <div className="searchBar__wrapper__container p-1">
            <button className="searchBar__container__button btn">
                <small>Location</small>
                <input type="text" className="searchBar__button__input form-control border-0 outline-0" placeholder='Where are you going?' />
              </button>
            </div>
            <div className="searchBar__wrapper__container -button p-1">
              <button  className="searchBar__container__button btn" type="submit">
                <small>Location<br/><span>Add dates</span></small>
              </button>
            </div>
            <div className="searchBar__wrapper__container -button p-1">
              <button className="searchBar__container__button btn" type="submit">
                <small>Location<br/><span>Add dates</span></small>
              </button>
            </div>
            <div className="searchBar__wrapper__container -button p-1 d-flex flex-row">
              <button className="searchBar__container__button btn" type="submit">
                <small>Guests<br/><span>Add guest</span></small>
              </button>
              <button className="searchBar__container__search btn btn-danger rounded-circle" type="submit"><img src="/airbnb-react-remake//search-icon.png" alt="" width="25px" /></button>
              </div>
          </div>
        </div>
        <div className="searchBar__content__panel tab-pane fade" id="experiences" role="tabpanel" aria-labelledby="experiences-tab">
          <div className="searchBar__panel__wrapper -wrapperTwo" >
            <div className="searchBar__wrapper__container p-1">
              <button className="searchBar__container__button btn">
                <small>Location</small>
                <input type="text" className="searchBar__button__input form-control border-0 outline-0" placeholder='Where are you going?' />
              </button>
            </div>
            <div className="searchBar__wrapper__container -buttonTwo p-1 d-flex flex-row">
              <button className="searchBar__container__button btn">
                <small>Date<br/><span>Add when you want to go</span></small>
              </button>
              <button className="searchBar__container__search btn btn-danger rounded-circle" type="submit"><img src="/airbnb-react-remake/search-icon.png" alt="" width="25px" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchBar;