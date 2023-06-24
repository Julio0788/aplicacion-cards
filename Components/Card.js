import React from 'react'
//import imagen1 from '../assets/Floor-Jansen.jpg'
export default function Card({id, title, image, pais}) {
  return (
    <div className='card bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt='Floor-Jansen'></img>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text text-secondary'>
                Nacionalidad: {pais}
            </p>
            <a href='#!' className='btn btn-outline-secondary rounded-0 text-center'>
                Ir al sitio web
            </a>
         
        </div>
    </div>
  )
}
