import React, {useState,useEffect}from 'react'
import art from './data/InspireArtData'
import outdoor from './data/InspireOutdoorData'
import unique from './data/InspireUniqueData'
import mountain from './data/InspireMountainData'
function InspireTabs() {
  const [showMore, setShowMore] = useState(false);
  const [numContent, setNumContent] = useState(11);
  function resetNum(){
    setShowMore(true)
    setNumContent(undefined)
  }
  useEffect( () => {
    console.log(showMore);
  }, [showMore]);
  return (
    <div className="inspireTabs">
      <div className="inspireTabs__row row m-5">
        <h4 className="inspireTabs__row__title col-12 ps-4">
          Inspiration for future getaways
        </h4>
        <div className="inspireTabs__row__nav">
          <ul className="inspireTabs__nav nav nav-pills" id="pills-tab" >
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab active p-2" id="art-tab" aria-current="page" data-bs-toggle="tab" data-bs-target="#art" type="button" role="tab" aria-controls="art" aria-selected="true"><span className='p-2'>Destinations for arts &amp; culture</span></a>
            </li>
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab p-2" id="outdoor-tab" data-bs-toggle="tab" data-bs-target="#outdoor" type="button" role="tab" aria-controls="outdoor" aria-selected="false"><span className='p-2'>Destinations for outdoor adventure</span></a>
            </li>
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab p-2" id="mountain-tab" data-bs-toggle="tab" data-bs-target="#mountain" type="button" role="tab" aria-controls="mountain" aria-selected="false"><span className='p-2'>Mountain cabins</span></a>
            </li>
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab p-2" id="beach-tab" data-bs-toggle="tab" data-bs-target="#beach" type="button" role="tab" aria-controls="beach" aria-selected="false"><span className='p-2'>Beach destinations</span></a>
            </li>
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab p-2" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular" type="button" role="tab" aria-controls="popular" aria-selected="false"><span className='p-2'>Popular destinations</span></a>
            </li>
            <li className="inspireTabs__lists__item me-3 nav-item">
              <a href="" className="inspireTabs__item__link nav-tab p-2" id="unique-tab" data-bs-toggle="tab" data-bs-target="#unique" type="button" role="tab" aria-controls="unique" aria-selected="false"><span className='p-2'>Unique Stays</span></a>
            </li>
            
          </ul>
          <div className="inspireTabs__content tab-content" id="myTabContent">
            <div className="inspireTabs__content__panel tab-pane container-fluid active p-2" id="art" role="tabpanel" aria-labelledby="art-tab">
                <div className="inspireTabs__panel__row inspireTabs__panel__row row row-cols-2 row-cols-sm-3 row-cols-lg-4">
                  {art.slice(0,numContent).map((places) => {
                    return(
                      <div className="inspireTabs__row__col col" key={places.id}>
                        <div className="inspireTabs__col__link p-2">
                          <a>{places.place}<br/><span>{places.area}</span></a>
                        </div>
                      </div>
                    )
                  })}
                  <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            <div className="inspireTabs__content__panel tab-pane container-fluid p-2" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
              <div className="inspireTabs__panel__row inspireTabs__panel__row row row-cols-2 row-cols-md-3 row-cols-lg-4">
                  {outdoor.slice(0,numContent).map((places) => {
                        return(
                          <div className="inspireTabs__row__col col" key={places.id}>
                            <div className="inspireTabs__col__link p-2">
                              <a>{places.place}<br/><span>{places.area}</span></a>
                            </div>
                          </div>
                        )
                  })}
                  <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            <div className="inspireTabs__content__panel tab-pane container-fluid p-2" id="mountain" role="tabpanel" aria-labelledby="mountain-tab">
                <div className="inspireTabs__panel__row row row-cols-2 row-cols-md-3 row-cols-lg-4">
                  {mountain.slice(0,numContent).map((places) => {
                    return(
                      <div className="inspireTabs__row__col col" key={places.id}>
                        <div className="inspireTabs__col__link p-2">
                          <a>{places.place}<br/><span>{places.area}</span></a>
                        </div>
                      </div>
                    )
                    })}
                    <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            <div className="inspireTabs__content__panel tab-pane container-fluid p-2" id="beach" role="tabpanel" aria-labelledby="beach-tab">
                <div className="inspireTabs__panel__row row row-cols-2 row-cols-md-3 row-cols-lg-4">
                  {art.slice(0,numContent).map((places) => {
                    return(
                      <div className="inspireTabs__row__col col" key={places.id}>
                        <div className="inspireTabs__col__link p-2">
                          <a>{places.place}<br/><span>{places.area}</span></a>
                        </div>
                      </div>
                    )
                    })}
                    <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            <div className="inspireTabs__content__panel tab-pane container-fluid p-2" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                <div className="inspireTabs__panel__row row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    {art.slice(0,numContent).map((places) => {
                    return(
                      <div className="inspireTabs__row__col col" key={places.id}>
                        <div className="inspireTabs__col__link p-2">
                          <a>{places.place}<br/><span>{places.area}</span></a>
                        </div>
                      </div>
                    )
                    })}
                    <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            <div className="inspireTabs__content__panel tab-pane container-fluid p-2" id="unique" role="tabpanel" aria-labelledby="unique-tab">
                <div className="inspireTabs__panel__row row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    {unique.slice(0,numContent).map((places) => {
                    return(
                      <div className="inspireTabs__row__col col" key={places.id}>
                        <div className="inspireTabs__col__link p-2">
                          <a>{places.place}<br/><span>{places.area}</span></a>
                        </div>
                      </div>
                    )
                    })}
                    <button className={showMore ? "inspireTabs__content__button -displayNone btn" :"inspireTabs__content__button btn"}  onClick={resetNum} >Show More</button>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspireTabs;