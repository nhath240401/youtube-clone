import React from 'react'
import { Link } from 'react-router-dom'

const VideoItem = ({item}) => {
  return (
    <div className='video col'>
        <Link to='/video'>  
        <img src={item.img} alt="video" className='rounded-3 mb-2' />
        </Link>
        <div className="avatar d-flex">
            <img src={item.avatar} alt="" className='me-1'/>
            <div className="">
                <h6 className=''>{item.title}</h6>
                <h6>{item.username}</h6>
                <p>{item.viewers} <span className='mx-3'>{item.time}</span></p>
            </div>
        </div>
    </div>
  )
}

export default VideoItem