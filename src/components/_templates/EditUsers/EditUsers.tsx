import { Form } from 'antd'
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { FormData } from 'src/constants/Api/Users/api'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestEditUser } from 'src/redux/users/action'
import { UtilsAddUsers } from 'src/utils/UsersUtils'
import { getIsLoading } from 'src/redux/users/selecor'
import confirm from 'antd/lib/modal/confirm'
import { ModalDefault } from 'src/components/_organisms'
import { CONSTANTS_TEXT } from 'src/constants'

interface IProps {
  user: FormData
}

export const EditUsers = ({ user }: IProps) => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(getIsLoading)

  const [visible, setVisible] = useState(false)
  const [editUser, setEditUser] = useState<FormData>()
  const [isDisabled, setIsDisabled] = useState(false)

  const [form] = Form.useForm()

  const loadingState = () => {
    if (isLoading && visible) {
      setIsDisabled(true)
    } else if (!isLoading && visible) {
      setVisible(false)
      setIsDisabled(false)
    }
  }

  useEffect(() => {
    loadingState()
  }, [isLoading])

  const onEditUser = (user: FormData) => () => {
    form.setFieldsValue(user)
    setVisible(true)
    setEditUser(user)
  }

  const onFinish = (values: FormData) => {
    dispatch(
      requestEditUser({ users: UtilsAddUsers({ ...editUser, ...values }) }),
    )
  }

  const handleCancel = () => {
    confirm({
      title: 'Do you want to return?',
      icon: <ExclamationCircleOutlined />,

      onOk() {
        setVisible(false)
      },
    })
  }

  return (
    <>
      <EditOutlined onClick={onEditUser(user)} />
      <ModalDefault
        form={form}
        visible={visible}
        title={CONSTANTS_TEXT.EDIT_USER}
        handleCancel={handleCancel}
        submit={form.submit}
        isDisabled={isDisabled}
        onFinish={onFinish}
      />
    </>
  )
}
