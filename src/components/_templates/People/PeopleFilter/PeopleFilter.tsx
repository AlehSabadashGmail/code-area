import { Button, Form, Input, InputNumber, Radio, Select } from 'antd'
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'
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
  const [filters, setFilters] = useState({} as PeopleData)
  const onFinish = (value: PeopleData) => {
    setFilters(value)
  }

  const filterData = useMemo(() => {
    const filterKeys = Object.keys(filters)
    const temp = users.filter((user: IUser) => {
      return filterKeys.every((key) => {
        if (!filters[key]) return true
        return Array.isArray(filters[key])
          ? filters[key].includes(user[key])
          : filters[key] === user[key]
      })
    })
    return temp
  }, [filters, users])

  useEffect(() => {
    setFilteredUsers(filterData)
  }, [filterData])

  const onReset = () => {
    form.resetFields()
    setFilteredUsers(users)
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
