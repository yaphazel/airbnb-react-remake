import React from 'react'

function SearchBar() {
  return (
    <div>
        <form class="d-flex">
            <button class="btn"><span>Location</span><br/><input class="form-control me-2" type="search" placeholder="Where are you going?" aria-label="Search"/></button>
            <button class="btn" type="submit"><span>Location</span><br/>Add dates</button>
            <button class="btn" type="submit"><span>Location</span><br/>Add dates</button>
            <button class="btn" type="submit">
                <span>Location</span><br/>Add guest  
                <button class="btn btn-danger rounded-pill" type="submit"><img src="/search-icon.png" alt="" width="25px"/></button>
            </button>
        </form>
    </div>
  )
}
export default SearchBar;