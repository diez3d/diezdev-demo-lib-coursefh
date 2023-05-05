import React from 'react'
import { FC } from 'react'

import './styles.css'


interface EmptyStateProps {
  classCustom?: string
  text?: string
  image?: {
    src: string
    description: string
  }
}

export const EmptyState: FC<EmptyStateProps> = ({ classCustom, text, image }) => {
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
