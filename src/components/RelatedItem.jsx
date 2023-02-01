import React from 'react'

const RelatedItem = ({item}) => {
  return (
    <div className='d-lg-flex mb-3'>
        <img 
        src={item.img} 
        alt="related_video" 
        className='me-3 rounded-3'    
        />
        
        <div className="description mt-2 mt-lg-0">
            <h6>{item.title}</h6>
            <h6>{item.username}</h6>
            <p>{item.views} <span className='mx-3'>{item.time}</span></p>
        </div>
    </div>
  )
}

export default RelatedItem