import React from 'react'

export const StringCompression = () => {
  const initialString = 'vaaafffffzzzzsss'
  const resultString = initialString.replace(
    /(\w)\1{0,}/g,
    (initialString) => `${initialString[0]}${initialString.length}`,
  )
  return (
    <>
      <div>String compression</div>
      <div>Initial string: {initialString}</div>
      <div>Result: {resultString}</div>
    </>
  )
}
