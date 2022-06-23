import React, {useContext} from 'react'
import { RMContext } from '../context/context'
import './Gallery.scss'



const Gallery = () => {
    const {characters} = useContext(RMContext)
  return (
    <div className='gallery'>
    {characters.map((character) => (
        <div className='card'>
        <h3 key={character.id}>{character.name}</h3>
        <img src={character.image} alt={character.name}></img>
        </div>
    ))}

    </div>
  )
}

export default Gallery