import React from 'react'
import imagen1 from '../assets/Floor-Jansen.jpg'
import imagen2 from '../assets/Katy-Perry.jpg'
import imagen3 from '../assets/Simone-Simons.jpg'
import Card from './Card'

const cards = [
    {
        id: 1,
        title: 'Floor Jansen',
        image: imagen1,
        pais: "Neerlandesa"
    },
    {
        id: 2,
        title: 'Katy Perry',
        image: imagen2,
        pais: "Estadounidense"
    },
    {
        id: 3,
        title: 'Simone Simons',
        image: imagen3,
        pais: "Neerlandesa"
    }
]

export default function Cards() {
    console.log(cards)

  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map( c=> (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        pais={c.pais}
                        />
                    </div>

                ))
            }
            
        </div>
    </div>
  )
}
