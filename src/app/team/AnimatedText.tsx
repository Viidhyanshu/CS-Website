'use client'

import React from 'react'

interface AnimatedTextProps {
  children: React.ReactNode
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({
  children,
  duration = 2,
  className = '',
  style = {},
}: AnimatedTextProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        fontFamily: 'Henju, serif',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

