import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { Modal } from '../../_atoms/Modal'
import { INITIAL_DATA } from './constants'
import './styles.scss'

interface CreateUser {
  id: number
  first_name: string
  last_name: string
  user_name: string
  email: string
  age: string
  password: string
  createdAt: number
}

export const AddUser = () => {
  const [isModalOpen, setModalState] = useState(false)

  const [formValues, setFormValues] = useState(INITIAL_DATA)
  const [formValuesError, setFormValuesError] = useState(INITIAL_DATA)

  const toggleModal = () => setModalState(!isModalOpen)
  const onClose = () => {
    setModalState(false)
    setFormValues(INITIAL_DATA)
    setFormValuesError(INITIAL_DATA)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    const errors = {
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      age: '',
      password: '',
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!formValues.first_name) {
      errors.first_name = 'First name is required!'
    } else if (!/^[A-Z].{3}$/.test(formValues.first_name)) {
      errors.first_name = 'The first name must be capitalized'
    }
    if (!formValues.last_name) {
      errors.last_name = 'Last name is required!'
    } else if (!/^[A-Z].{3}$/.test(formValues.last_name)) {
      errors.last_name = 'The last name must be capitalized'
    }
    if (!formValues.user_name) {
      errors.user_name = 'User name is required!'
    }
    if (!formValues.email) {
      errors.email = 'Email is required!'
    } else if (!regex.test(formValues.email)) {
      errors.email = 'This is not a valid email format!'
    }
    if (!formValues.age) {
      errors.age = 'Age is required!'
    }
    if (!formValues.password) {
      errors.password = 'Password is required'
    }
    setFormValuesError(errors)

    const createUser: CreateUser = {
      id: Date.now(),
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      user_name: formValues.user_name,
      email: formValues.email,
      age: formValues.age,
      password: formValues.password,
      createdAt: Date.now(),
    }
  }
  return (
    <div>
      <Button onClick={toggleModal}>Create user</Button>
      <Modal title={'Create user'} isOpen={isModalOpen} onClose={toggleModal}>
        <div>
          <Input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formValues.first_name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="error">{formValuesError.first_name}</div>
        <div>
          <Input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={formValues.last_name}
            onChange={handleChange}
          />
          <div className="error">{formValuesError.last_name}</div>
        </div>
        <div>
          <Input
            type="text"
            name="user_name"
            placeholder="User name"
            value={formValues.user_name}
            onChange={handleChange}
            autoComplete="off"
          />
          <div className="error">{formValuesError.user_name}</div>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <div className="error">{formValuesError.email}</div>
        </div>
        <div>
          <Input
            type="number"
            name="age"
            placeholder="Age"
            value={formValues.age}
            onChange={handleChange}
          />
          <div className="error">{formValuesError.age}</div>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <div className="error">{formValuesError.password}</div>
        </div>
        <Button onClick={handleSubmit}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal>
    </div>
  )
}
