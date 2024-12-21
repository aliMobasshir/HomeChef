import React from 'react'
import rectange7 from './categories 1.svg'
import rectange8 from './checkbox 1.svg'
import section from './Section.module.css'
import {Link} from 'react-router-dom'
import Data from '../FakeData.js'
import About from './About.jsx'

const Body = ({ query}) => {
  const filter = Data.filter(
    item => item.title && item.title.toLowerCase().includes(query.toLowerCase())
  )

  if (!query) {
    return (
      <section>
        <div id='section_container' className={section.section_container}>
          <div
            id='section_container1'
            className={section.section_container1_category}
          >
            <Link to='/about' className={section.ReactLink}>
              <img src={rectange7} alt=' ' />
              <p>Explore categories</p>
              
            </Link>
          </div>

          <div id='section_line' className={section.partition_line}></div>

          <div
            id='section_container2'
            className={section.section_container2_category}
          >
            <Link to="/about" className={section.ReactLink}>
              <img src={rectange8} alt=' ' />
              <p>Search by ingredients</p>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (filter.length === 0) {
    return <main></main>
  }
}

export default Body
