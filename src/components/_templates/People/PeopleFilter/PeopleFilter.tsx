import { Button, Form, Input, InputNumber, Radio, Select } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'
import { PeopleData } from 'src/constants/Api/People/people'
import { GENDER, OPTIONS, SINGLLE_OPTIONS } from 'src/constants/Text'
import { IUser } from 'src/redux'
import { useAppSelector } from 'src/redux/hooks'
import { getUserInfo } from 'src/redux/users/selecor'
import { useAgeValidation } from 'src/rules'

interface IProps {
  setFilteredUsers: Dispatch<SetStateAction<IUser[]>>
}

export const PeopleFilter = ({ setFilteredUsers }: IProps) => {
  const { users } = useAppSelector(getUserInfo)
  const [form] = Form.useForm()
  const onFinish = (value: PeopleData) => {
    setFilteredUsers(filter(users, value))
  }

  const onReset = () => {
    form.resetFields()
    setFilteredUsers(users)
  }

  const filter = (users: IUser[], value: PeopleData) => {
    const filterKeys = Object.keys(value)
    return users.filter((user: IUser) => {
      return filterKeys.every((key) => {
        if (!value[key]?.length) return true
        return Array.isArray(value[key])
          ? value[key].includes(user[key])
          : value[key] === user[key]
      })
    })
  }

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item label="Gender" name="gender">
        <Radio.Group options={GENDER} />
      </Form.Item>
      <Form.Item label="Age" name="age" rules={[useAgeValidation]}>
        <InputNumber placeholder="Input age" />
      </Form.Item>
      <Form.Item label="Is active" name="is_active" valuePropName="checked">
        <Select placeholder="select" options={SINGLLE_OPTIONS} />
      </Form.Item>
      <Form.Item label="Role" name="role">
        <Select mode="multiple" placeholder="select multy" options={OPTIONS} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email', message: 'Incorrect' }]}
      >
        <Input placeholder="Input email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}
