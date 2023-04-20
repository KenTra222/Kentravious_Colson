import React from 'react'
import casestudies from '../data/casestudies.js'
import CasestudyItem from '../CasestudyItem/CasestudyItem.jsx'

const Casestudies = () => {
  return (
    <div className="case-study-list">
      {Case.map(caseStudy => (
        <div className="case-study" key={caseStudy.id}>
          <img src={caseStudy.imageUrl} alt={caseStudy.title} />
          <h4>{caseStudy.title}</h4>
          <p>{caseStudy.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Casestudies