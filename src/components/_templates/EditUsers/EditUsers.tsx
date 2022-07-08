import { Form } from 'antd'
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { FormData } from 'src/constants/Api/Users/api'
import { useAppDispatch } from 'src/redux/hooks'
import { requestEditUser } from 'src/redux/users/action'
import { UtilsAddUsers } from 'src/utils/UsersUtils'
import confirm from 'antd/lib/modal/confirm'
import { ModalDefault } from 'src/components/_organisms'
import { CONSTANTS_TEXT } from 'src/constants'

interface IProps {
  user: FormData
}

export const EditUsers = ({ user }: IProps) => {
  const dispatch = useAppDispatch()

  const [visible, setVisible] = useState(false)
  const [editUser, setEditUser] = useState<FormData>()
  const [isDisabled, setIsDisabled] = useState(false)

  const [form] = Form.useForm()

  const onEditUser = (user: FormData) => () => {
    form.setFieldsValue(user)
    setVisible(true)
    setEditUser(user)
  }

  const getFormDataPromise = async (values: FormData) => {
    return dispatch(
      requestEditUser({ users: UtilsAddUsers({ ...editUser, ...values }) }),
    )
  }

  const onFinish = (values: FormData) => {
    setIsDisabled(true)
    getFormDataPromise(values).finally(() => {
      setVisible(false)
      setIsDisabled(false)
    })
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
