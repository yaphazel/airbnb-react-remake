import React from 'react'
import languages from './LanguageData';

function LanguageModal() {
  return (
    <div className="langModal">
        <ul className="langModal__tabs nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active text-dark" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </li>
        </ul>
        <div className="langModal__content tab-content" id="pills-tabContent">
            <div className="langModal__content__panel tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="langModal__panel__container">
                    <h4 className='langModal__container__title'>Suggested languages and regions</h4>
                    <div className="langModal__container__box container-fluid">
                        <div className="langModal__box__row row row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
                            <div className="langModal__row__col col">
                                <button  className="langModal__col__button btn" type="button">
                                    <small>简体中文<br/><span>中国</span></small>
                                </button>
                            </div>
                            <div className="langModal__row__col col">
                                <button  className="langModal__col__button btn" type="button">
                                    <small>简体中文<br/><span>美国</span></small>
                                </button>
                            </div>
                            <div className="langModal__row__col col">
                                <button  className="langModal__col__button btn" type="button">
                                    <small>English<br/><span>United Kingdom</span></small>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Choose a language and region</h4>
                    <div className="container-fluid">
                        <div className="row row-cols-auto row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            {languages.map((lang) => {
                                return(
                                <div className="col" key={lang.id}>
                                    <button  className="langModal__col__button btn" type="button">
                                        <small>{lang.language}<br/><span>{lang.country}</span></small>
                                    </button>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>

        </div>
    </div>
  )
}

export default LanguageModal;