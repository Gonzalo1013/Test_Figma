import React from 'react'
import './usps.scss'

const usps = [
                {id: 1, txt: '30-DAY SATISFACTION GUARANTEE', img:'/assets/checkmark.png'},
                {id: 2, txt: 'free delibery on orders over $40.00', img:'/assets/truck.png'}, 
                {id: 3, txt: '50.000+ happy customers', img:'/assets/cards-heart.png'}, 
                {id: 4, txt: '100% money back guarantee', img:'/assets/arrow.png'} 
            ]

export const Usps = () => {
  return (
    <div>

        <div className='bar1'></div>
        <div className="usp">
          {
            usps.map( us => 
              <div className='card' key={us.id}>
              <img className='i' src={us.img} alt="asd" />
              <p className='text'>{us.txt}</p>
              </div>
          )
        }
        </div>
        <div className='bar2'></div>
      
    </div>
  )
}


