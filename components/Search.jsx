import React, { useState } from 'react'
import Style from './Search.module.css'
import maginfy from './magnifying_glass.svg'
import xmark from './xmark.svg'

const Search = ({ setSearchOpen, setQuery }) => {
  // Destructure props correctly
  const [search, setSearch] = useState(false) // Local search state to toggle search bar visibility

  // Toggle the search visibility
  const toggleSearch = () => {
    setSearch(!search) // Toggle the local search state
    setSearchOpen(!search) // Pass the state to the parent component (whether search is open or not)
  }

  // Close the search bar when the xmark is clicked
  const handler = () => {
    setSearch(false) // Close the search bar
    setSearchOpen(false) // Update the parent component's state to reflect the change
  }

  // // Handle input changes and update the query in the parent component
  const handleInput = e => {
    const inputValue = e.target.value
    // console.log(inputValue);  // Optionally log the value
    setQuery(inputValue) // Update the query in the parent component
  }

  return (
    <div className={Style.searchContainer}>
      <div className={Style.searchDiv}>
        <img src={maginfy} alt="Click to maginify" />
        <input
          className={Style.searchInput}
          type='text'
          placeholder='Search for recipes'
          onInput={handleInput}
        />
      </div>

      <img
        onClick={toggleSearch}
        className={Style.maginfyIcon}
        src={maginfy}
        alt='Click to Magnify'
      />

      {search && (
        <div className={Style.searchResult}>
          <img
            onClick={handler}
            className={Style.xmarkImage}
            src={xmark}
            alt='Close search'
          />
          <input type='text' placeholder='Search' onInput={handleInput} />
        </div>
      )}
    </div>
  )
}

export default Search
