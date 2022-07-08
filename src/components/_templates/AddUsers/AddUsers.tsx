import { Form, Button } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from 'src/redux/hooks'
import { FormData } from 'src/constants/Api/Users/api'
import { UtilsAddUsers } from 'src/utils/UsersUtils'
import { CONSTANTS_TEXT } from 'src/constants'
import { requestAddUsers } from 'src/redux/users/action'
import { ModalDefault } from 'src/components/_organisms'

export const AddUsers = () => {
  const dispatch = useAppDispatch()

  const [isDisabled, setIsDisabled] = useState(false)
  const [visible, setVisible] = useState(false)

  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const getFormDataPromise = async (values: FormData) => {
    return dispatch(requestAddUsers({ users: UtilsAddUsers(values) }))
  }

  const onFinish = (values: FormData) => {
    setIsDisabled(true)
    getFormDataPromise(values).finally(() => {
      setVisible(false)
      setIsDisabled(false)
      form.resetFields()
    })
  }

  return (
    <div>
      <Button onClick={showModal}>{CONSTANTS_TEXT.CREATE_USERS}</Button>
      <ModalDefault
        form={form}
        visible={visible}
        title={CONSTANTS_TEXT.CREATE_USERS}
        handleCancel={handleCancel}
        submit={form.submit}
        isDisabled={isDisabled}
        onFinish={onFinish}
      />
    </div>
  )
}
