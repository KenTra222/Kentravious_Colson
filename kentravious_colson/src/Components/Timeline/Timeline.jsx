import React from 'react'
import './timeline.scss'
import timeline from "../data/timeline.js"
import TimelineItem from '../TimelineItem/TimelineItem'

const Timeline = () => {
  return (
    <div className='timeline'>
      <h2>
        04.
        <span>Timeline</span>
      </h2>
        <div className='individual'>

        {timeline.map(item =>(
            <TimelineItem
            details={item.details}
            duration={item.duration}
            title={item.title}
            year={item.year}
            />
            ))}
        </div>
            
    </div>
  )
}

export default Timeline