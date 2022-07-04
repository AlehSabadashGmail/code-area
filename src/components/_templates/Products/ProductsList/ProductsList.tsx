import { Button, Card, Dropdown, Form } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { INITIAL_DATA, ProductsData } from 'src/constants'
import confirm from 'antd/lib/modal/confirm'
import { IProduct } from 'src/redux/types'
import { FormDefault } from 'src/components/_organisms/Form'
import { Title } from 'src/Typography'
import moment from 'moment'
import { VirtualScroll } from 'src/components/_atoms'
import './ProductsList.scss'

export const ProductsList = () => {
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [products, setProducts] = useState<ProductsData[]>(INITIAL_DATA)
  const [currentProducts, setCurrentProducts] = useState<IProduct | null>()
  const [addForm] = Form.useForm()
  const [editForm] = Form.useForm()

  const onFinish = (values: ProductsData) => {
    products.push({
      ...values,
      id: Math.random().toString(16).slice(2),
      createdAt: moment().format('MM/dd/yyyy'),
    })
    setIsAdd(false)
    addForm.resetFields()
  }

  const editProductsHandler = (product: IProduct) => () => {
    if (isEdit) {
      showNextEditConfirm(product)
      setIsEdit(false)
    } else {
      setIsEdit(true)
      setCurrentProducts(product)
      editForm.setFieldsValue(product)
    }
  }

  const deleteProductsHandler = (product: IProduct) => () => {
    confirm({
      title: 'Do you want to delete product?',
      icon: <ExclamationCircleOutlined />,

      onOk() {
        setProducts(products.filter((item) => item.id !== product.id))
      },
    })
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

  const showEditConfirm = (product: IProduct) => () => {
    JSON.stringify(product) ===
    JSON.stringify({ ...currentProducts, ...editForm.getFieldsValue() })
      ? (setCurrentProducts(null), setIsEdit(false))
      : confirm({
          title: 'Do you want to cancel editing?',
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
    setProducts(
      products.map((item) =>
        ({ ...currentProducts, ...product }.id === item.id
          ? { ...item, ...{ ...currentProducts, ...product } }
          : item),
      ),
    )
    setCurrentProducts(null)
    setIsEdit(false)
  }

  const showAddButton = () => {
    setIsAdd(true)
  }

  const showMenu = (product: IProduct) => () =>
    (
      <>
        <Button onClick={editProductsHandler(product)}>
          <EditOutlined />
        </Button>
        <Button onClick={deleteProductsHandler(product)}>
          <DeleteOutlined />
        </Button>
      </>
    )

  const addCard = [
    isAdd ? (
      <div className="form">
        <FormDefault
          form={addForm}
          onFinish={onFinish}
          onClick={showConfirm}
          submitButtonName="Add"
        />
      </div>
    ) : (
      <Button className="button" size="large" onClick={showAddButton}>
        <PlusCircleOutlined />
      </Button>
    ),
  ]

  const cards = [
    ...products.map((product) => (
      <>
        {currentProducts?.id === product.id ? (
          <Card key={product.id} className="form">
            <FormDefault
              form={editForm}
              onFinish={onEditFinish}
              onClick={showEditConfirm(product)}
              submitButtonName="Update"
            />
          </Card>
        ) : (
          <Card
            key={product.id}
            extra={[
              <Dropdown overlay={showMenu(product)} trigger={['click']}>
                <EllipsisOutlined />
              </Dropdown>,
            ]}
          >
            <Title level={2}>Name: {product.product_name}</Title>
            <div>Price: {product.price}</div>
            <div>Description: {product.description}</div>
          </Card>
        )}
      </>
    )),
    ...addCard,
  ]

  return (
    <>
      <VirtualScroll
        height="500px"
        rowHeight={213.5}
        data={cards}
        visibleElements={6}
      />
    </>
  )
}
