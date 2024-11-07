import React from 'react'
import Style from './Search.module.css'

const Search = () => {
  return (
    <div style={{color: "red"}} ClassName={Style.searchBar}>
      <input className={Style.searchInput} type="text" placeholder="Search for recipes" />
    </div>
  )
}

export default Search
