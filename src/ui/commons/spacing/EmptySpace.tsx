
import React from 'react'

const EmptySpace = ({height}: {height: number}) => {
  return (
    <section 
        className="empty-space" 
        style={{
        height: height + "rem",
        display: "block",
        background: "transparent"
    }} ></section>
  )
}

export default EmptySpace;