import React, { FC } from 'react'
import { Social } from '../utils/types'

const SocialButton: FC<{ social: Social }> = ({ social }) => {
  return (
    <a className="p-2" href={social.url} target="blank">
      <img
        className="w-8 h-8"
        src={`images/${social.name}.svg`}
        alt={`Katsuaki Tandai ${social.name} profile`}
      />
    </a>
  )
}

export default SocialButton
