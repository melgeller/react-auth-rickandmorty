import React from 'react'
import { useParams } from 'react-router-dom'

const GalleryDetail = () => {
    const { characterID } = useParams()
  return (
    <div>CharacterDetail - {characterID}</div>
  )
}

export default GalleryDetail