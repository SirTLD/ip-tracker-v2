import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 ${className}`}
    >
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = '' }: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}
