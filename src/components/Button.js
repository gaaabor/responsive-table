import React from 'react'

const Button = ({ text, type }) => {
  return (
    <a href="#0" className={`btn btn--${type}`}>
      {text}
    </a>
  )
}

export default Button
