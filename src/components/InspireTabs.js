import React from 'react'

function InspireTabs() {
  return (
    <div class="inspirationTabs m-5">
      <h2>Inspiration for future getaways</h2>
      <ul class="inspirationTabs__Nav nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a href="" class="nav-link active" id="art-tab" aria-current="page" data-bs-toggle="tab" data-bs-target="#art" type="button" role="tab" aria-controls="art" aria-selected="true">Destinations for arts & culture</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" id="outdoor-tab" data-bs-toggle="tab" data-bs-target="#outdoor" type="button" role="tab" aria-controls="outdoor" aria-selected="false">Destinations for outdoor adventure</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" id="beach-tab" data-bs-toggle="tab" data-bs-target="#beach" type="button" role="tab" aria-controls="beach" aria-selected="false">Beach destinations</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular" type="button" role="tab" aria-controls="popular" aria-selected="false">Popular destinations</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" id="unique-tab" data-bs-toggle="tab" data-bs-target="#unique" type="button" role="tab" aria-controls="unique" aria-selected="false">Unique Stays</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link" id="mountain-tab" data-bs-toggle="tab" data-bs-target="#mountain" type="button" role="tab" aria-controls="mountain" aria-selected="false">Mountain cabins</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane container-fluid active" id="art" role="tabpanel" aria-labelledby="art-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-3"><a>Phoenix<br/><span>Arizona</span></a></div>
              <div class="col-6 col-md-3"><a>Hot Springs<br/><span>Arkansas</span></a></div>
              <div class="col-6 col-md-3"><a>Los Angeles<br/><span>California</span></a></div>
              <div class="col-6 col-md-3"><a>Tiny Houses<br/><span>California </span></a></div>
              <div class="col-6 col-md-3"><a>Beach Houses<br/><span>California</span></a></div>
              <div class="col-6 col-md-3"><a>Campers and RVs<br/><span>Catalonia</span></a></div>
              <div class="col-6 col-md-3"><a>Lakehouses<br/><span>Czechia</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="art" role="tabpanel" aria-labelledby="art-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2d"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="outdoor" role="tabpanel" aria-labelledby="outdoor-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="beach" role="tabpanel" aria-labelledby="beach-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="popular" role="tabpanel" aria-labelledby="popular-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="unique" role="tabpanel" aria-labelledby="unique-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
        <div class="tab-pane container-fluid" id="mountain" role="tabpanel" aria-labelledby="mountain-tab">
            <div class="row flex-row">
              <div class="col-6 col-md-4 p-2"><a>Cabins<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Treehouses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Glamping<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Tiny Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Beach Houses<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Campers and RVs<br/><span>United States</span></a></div>
              <div class="col-6 col-md-4 p-2"><a>Lakehouses<br/><span>United States</span></a></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InspireTabs;