import React from 'react'
import { FC } from 'react'

import './styles.css'


interface EmptyProps {
  classCustom?: string
  text?: string
  image?: {
    src: string
    description: string
  }
}

export const EmptyState: FC<EmptyProps> = ({ classCustom, text, image }) => {
  return (
    <div className={`emptyState ${classCustom}`}>
      {image && (
        <img
          src={image.src}
          alt={image.description}
          title={image.description}
        />
      )}
      {text && <span className="emptyState__text">{text}</span>}
    </div>
  )
}
