import React, { FC } from 'react'
import { Favorite } from '../utils/types'

const FavoriteCell: FC<{ favorite: Favorite }> = ({ favorite }) => {
  return (
    <div className="p-4 relative group md:m-4">
      <img
        className="block w-32 h-32 transition-opacity group-hover:opacity-30"
        src={favorite.imagePath}
        alt={favorite.title}
      />
      <div className="absolute inset-0 transition-opacity opacity-0 cursor-default group-hover:opacity-100">
        <h4 className="text-lg text-white text-center">{favorite.title}</h4>
        <p className="text-sm text-white">{favorite.description}</p>
      </div>
    </div>
  )
}

export default FavoriteCell
