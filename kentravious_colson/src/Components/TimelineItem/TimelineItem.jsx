import React from 'react'
import './timelineItem.scss'

const TimelineItem = ({ details, duration, title, year}) => {
  return (
    <ol className='timelineItem_wrapper'>
        <li className='iten'>
            <div className='div_element'/>
                <p className=''>
                    <span className='year'>
                        {year}
                    </span>
                    <h3 className='title'>{title}</h3>

                    <div className='duration'>
                        {duration}
                    </div>
                </p>
                <p className='details'>{details}</p>
        </li>
    </ol>
  )
}

export default TimelineItem