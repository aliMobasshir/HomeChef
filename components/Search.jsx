import React from 'react'
import Style from './Search.module.css'
import maginfy from "./magnifying_glass.svg"

const Search = () => {
  return (
    <div style={{color: "red"}} ClassName={Style.searchBar}>
      <input className={Style.searchInput} type="text" placeholder="Search for recipes" />


      <img className={Style.maginfyIcon} src={maginfy} alt="Click TO Magnify" />
    </div>
  )
}

export default Search
