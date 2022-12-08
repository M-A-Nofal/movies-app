import React from 'react'

function Ucard({ item: {id, cover, name, time} }) {
  return (
    <>
        <div className='MovieBox'>
            <div className='img'>
                <img src={cover} alt='cover'/>
            </div>
            <div className='text'>
                <h3>{name}</h3>
                <span>{time}</span>
                <button className='primary-btn'>
                    <i className='fa fa-play'></i>
                    PLAY NOW
                </button>
            </div>
        </div>
    </>
  )
}

export default Ucard