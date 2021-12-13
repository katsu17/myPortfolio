import React, { FC } from 'react'
import { Portfolio } from '../utils/types'

const PortfolioCell: FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  return (
    <a href='https://sakurainaokoofficial.vercel.app/' className="p-4 relative group md:m-4" target='_blank' rel='noopener noreferrer'>
      <img
        className="block w-32 h-32 transition-opacity rounded-xl group-hover:opacity-30 md:w-56 md:h-56"
        src={portfolio.imagePath}
        alt={portfolio.title}
      />
      <div className="absolute inset-0 transition-opacity opacity-0 cursor-default group-hover:opacity-100">
        <h4 className="text-lg text-white text-center md:text-2xl">{portfolio.title}</h4>
        <p className="text-sm text-white md:text-xl">{portfolio.description}</p>
      </div>
    </a>
  )
}

export default PortfolioCell
