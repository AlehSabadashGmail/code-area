import React from 'react'

export const StringCompression = () => {
  const initialString = 'aaafffffzzzzsss'
  const resultString = initialString.replace(
    /(\w)\1+/g,
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
