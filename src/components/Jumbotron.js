import React from 'react'

export default function Jumbotron() {
  return (
    <div className="body__section">
        <div className="body__section__row row">
            <div className="jumbotron__ukraine col mx-5 mb-5 p-5 text-white bg-danger rounded">
                <h1 className="jumbotron__ukraine__title">Help house 100,000 refugees fleeing Ukraine</h1>
                <button type="button" className="btn btn-outline-light text-light"><strong>Learn more</strong></button>
            </div>
        </div>
        <div className="jumbotron__flexible row  m-5 p-5">
            <div className=" col text-white text-center rounded ">
                <h1 className="jumbotron__flexible__title">Let your curiosity do the booking</h1>
                <button type="button" className="jumbotron__flexible__button btn btn-light rounded-pill py-3 px-5">I'm flexible</button>
            </div>
        </div>
    </div>
  )
}
