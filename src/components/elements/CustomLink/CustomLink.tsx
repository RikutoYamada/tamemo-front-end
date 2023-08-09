import { useState, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

type CustomLinkProps = LinkProps & {
  children: ReactNode
}

export const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const hoverStyle = {
    color: 'darkblue',
    display: 'flex',
    alignItems: 'center',
  }

  const defaultStyle = {
    ...hoverStyle,
    textDecoration: 'none',
    color: 'royalblue',
  }

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? hoverStyle : defaultStyle}
      {...props}
    >
      {children}
    </Link>
  )
}
