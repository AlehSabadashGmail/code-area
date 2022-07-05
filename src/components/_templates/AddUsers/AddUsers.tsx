import { Form, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { FormData } from 'src/constants/Api/Users/api'
import { UtilsAddUsers } from 'src/utils/UsersUtils'
import { CONSTANTS_TEXT } from 'src/constants'
import { requestAddUsers } from 'src/redux/users/action'
import { getIsLoading } from 'src/redux/users/selecor'
import { ModalDefault } from 'src/components/_organisms'

export const AddUsers = () => {
  const dispatch = useAppDispatch()

  const { isLoading } = useAppSelector(getIsLoading)

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

  const onFinish = (values: FormData) => {
    dispatch(requestAddUsers({ users: UtilsAddUsers(values) }))
  }

  const loadingState = () => {
    if (isLoading && visible) {
      setIsDisabled(true)
    } else if (!isLoading && visible) {
      setVisible(false)
      setIsDisabled(false)
      form.resetFields()
    }
  }

  useEffect(() => {
    loadingState()
  }, [isLoading])

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
