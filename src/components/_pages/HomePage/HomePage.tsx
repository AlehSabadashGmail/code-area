import React, { useState } from 'react'

export const HomePage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[leverx]+\.[a-zA-Z]{2,4}$/g
    if (regEx.test(email)) {
      setMessage('Valid Email')
    } else if (!regEx.test(email) && email !== '') {
      setMessage('Invalid email')
    } else {
      setMessage('Please, input email')
    }
  }
  const handleOnChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <div className="home-page">Home page</div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={handleOnChange}
      />
      <button onClick={emailValidation}>Check</button>
      <p className="message">{message}</p>
    </>
  )
}
