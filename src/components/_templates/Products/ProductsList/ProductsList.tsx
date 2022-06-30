import { Button, Card, Form } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import './ProductsList.scss'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import {
  addProducts,
  deleteProducts,
  editProducts,
} from 'src/redux/reducers/productsSlice'
import { ProductsData } from 'src/constants/ProductsType'
import { format } from 'date-fns'
import confirm from 'antd/lib/modal/confirm'
import { IProduct } from 'src/redux/types'
import { getProducts } from 'src/redux/products/selectors'
import VirtualList from 'rc-virtual-list'
import { FormDefault } from 'src/components/_atoms/Form/form'

export const ProductsList = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(getProducts)
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [currentProducts, setCurrentProducts] = useState<IProduct | null>()
  const [addForm] = Form.useForm()
  const [editForm] = Form.useForm()

  const onFinish = (values: ProductsData) => {
    dispatch(
      addProducts({
        ...values,
        id: Date.now().toString(),
        createdAt: format(new Date(), 'MM/dd/yyyy'),
      }),
    )
    setIsAdd(false)
    addForm.resetFields()
  }

  const editProductsHandler = (product: IProduct) => () => {
    if (isEdit) {
      showNextEditConfirm(product)
    } else {
      setIsEdit(true)
      setCurrentProducts(product)
      editForm.setFieldsValue(product)
    }
  }

  const deleteProductsHandler = (product: IProduct) => () => {
    dispatch(deleteProducts(product))
  }

  const showConfirm = () => {
    confirm({
      title: 'Do you want to return?',
      icon: <ExclamationCircleOutlined />,

      onOk() {
        setIsAdd(false)
        addForm.resetFields()
      },
    })
  }

  const showEditConfirm = () => {
    confirm({
      title: 'Do you want to return?',
      icon: <ExclamationCircleOutlined />,

      onOk() {
        setCurrentProducts(null)
        editForm.resetFields()
        setIsEdit(false)
      },
    })
  }

  const showNextEditConfirm = (product: IProduct) => {
    confirm({
      title: 'Do you want to switch edited product?',
      icon: <ExclamationCircleOutlined />,

      onOk() {
        setCurrentProducts(product)
        editForm.setFieldsValue(product)
      },
    })
  }

  const onEditFinish = (product: IProduct) => {
    dispatch(editProducts({ ...currentProducts, ...product }))
    setCurrentProducts(null)
    setIsEdit(false)
  }

  const showAddButton = () => {
    setIsAdd(true)
  }

  const addCard = isAdd ? (
    <Card className="form">
      <FormDefault
        form={addForm}
        onFinish={onFinish}
        onSubmit={showConfirm}
        submitButtonName="Add"
      />
    </Card>
  ) : (
    <Card>
      <Button onClick={showAddButton}>
        <PlusCircleOutlined />
      </Button>
    </Card>
  )

  const cards = [
    ...products.map((product) => (
      <>
        {currentProducts?.id === product.id ? (
          <Card key={product.id} className="form">
            <FormDefault
              form={editForm}
              onFinish={onEditFinish}
              onSubmit={showEditConfirm}
              submitButtonName="Update"
            />
          </Card>
        ) : (
          <Card
            key={product.id}
            extra={[
              <Button onClick={editProductsHandler(product)}>
                <EditOutlined />
              </Button>,
              <Button onClick={deleteProductsHandler(product)}>
                <DeleteOutlined />
              </Button>,
            ]}
          >
            <div>Name: {product.product_name}</div>
            <div>Price: {product.price}</div>
            <div>Description: {product.description}</div>
          </Card>
        )}
      </>
    )),
    addCard,
  ]

  return (
    <VirtualList data={cards} itemKey="cards">
      {(product) => product}
    </VirtualList>
  )
}
