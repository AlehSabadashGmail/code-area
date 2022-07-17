import {
  Button,
  Collapse,
  Form,
  Input,
  Modal,
  notification,
  Typography,
} from 'antd'
import React, { useState } from 'react'
import { QuestionData } from 'src/constants/Api/Flowers/question'
import questions from 'src/data/questions.json'
import { useRequire } from 'src/rules'
import './FlowersQuestions.scss'

export const FlowersQuestions = () => {
  const { Panel } = Collapse
  const [visible, setVisible] = useState(false)

  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const onFinish = (values: QuestionData) => {
    notification.open({
      message: `Your question has been sent: id: ${Math.random()
        .toString(36)
        .slice(2)}
        email: ${values.email}
        question: ${values.question}`,
    })
    setVisible(false)
  }

  return (
    <>
      <Typography.Title id="questions" level={1} className="question">
        Popular questions
      </Typography.Title>
      <div className="questions_wrapper">
        <Collapse className="collapse" ghost={true}>
          {questions.map((question) => (
            <Panel header={question.answer} key={question.id} className="panel">
              {question.answer}
            </Panel>
          ))}
        </Collapse>
        <div className="questions_leaving">
          <Typography.Title level={2}>
            Didn't find the answer to your question?
          </Typography.Title>
          <Typography.Title level={4}>
            Leave a request and we will contact you
          </Typography.Title>
          <Button className="button" onClick={showModal}>
            Ask
          </Button>
        </div>
      </div>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title="Ask"
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              useRequire,
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input your email"
            />
          </Form.Item>
          <Form.Item label="Question" name="question" rules={[useRequire]}>
            <Input.TextArea
              autoComplete="new-password"
              placeholder="Please input your question"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
