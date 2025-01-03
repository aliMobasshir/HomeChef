import React, { useState } from 'react'
import Style from './Search.module.css'
import maginfy from './magnifying_glass.svg'
import xmark from './xmark.svg'

const Search = ({ setSearchOpen, setQuery }) => {
  const [search, setSearch] = useState(false)
  const [localQuery, setLocalQuery] = useState('') // Local state for input

  // Handle input changes and update query in parent (App.jsx)
  const handleInput = e => {
    setLocalQuery(e.target.value) // Local query state
    setQuery(e.target.value) // Update query in App.jsx
    console.log(`I am Search Component ${e.target.value}`)
  }

  // Toggle search visibility
  const toggleSearch = () => {
    setSearch(!search) // Toggle the local search state
    setSearchOpen(!search) // Pass the state to the parent component (whether search is open or not)
  }

  // Close search bar
  const handler = () => {
    setSearch(false) // Close the search bar
    setSearchOpen(false) // Update the parent component's state to reflect the change
  }

  return (
    <div className={Style.searchContainer}>
      <div className={Style.searchDiv}>
        {/* <img src={maginfy} alt="Click to magnify" /> */}
        <input
          className={Style.searchInput}
          type='text'
          placeholder='Search for recipes'
          value={localQuery}
          onChange={handleInput} // Handle input change
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
          <input
            type='text'
            placeholder='Search'
            value={localQuery}
            onChange={handleInput} // Handle input change
          />
        </div>
      )}
    </div>
  )
}

export default Search
