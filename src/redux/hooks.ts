import React, { useState } from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useLocalStorage = <T>(keyName: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(keyName)

    if (value) {
      return JSON.parse(value)
    } else {
      localStorage.setItem(keyName, JSON.stringify(defaultValue))
      return defaultValue
    }
  })

  const setValue = (newValue: T) => {
    localStorage.setItem(keyName, JSON.stringify(newValue))
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
