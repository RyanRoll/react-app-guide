import React from 'react'
import { Form, Input, Button, notification } from 'antd'
import axios from 'axios'
import _ from 'lodash'

import styles from './styles/Login.module.scss'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
}

class Login extends React.Component {
  state = {
    loading: false
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { loading } = this.state
    return (
      <div className={styles.login}>
        <Form
          className={styles.form}
          {...formItemLayout}
          onSubmit={this.onSubmit}
        >
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  type: 'email',
                  message: 'Invalid email format'
                }
              ]
            })(<Input placeholder="Please input your email" />)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  type: 'string',
                  min: 8,
                  max: 12,
                  message: 'The range of password is between 8 to 12 characters'
                }
              ]
            })(<Input.Password placeholder="Please input your password" />)}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
            <Button type="primary" block htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  onSubmit = event => {
    const {
      form: { validateFieldsAndScroll },
      history
    } = this.props
    event.preventDefault()
    this.setState({
      loading: true
    })
    validateFieldsAndScroll(async (errors, values) => {
      if (errors) {
        this.setState({
          loading: false
        })
        return
      }
      try {
        const response = await axios({
          url: '/api/login',
          method: 'post',
          data: values
        })
        const success = _.get(response, 'data.success', false)
        if (success) {
          notification.success({
            message: 'Success',
            description: 'Welcome!'
          })
          setTimeout(() => {
            history.push('/') // = <Redirect to="/" />
          }, 1000)
        } else {
          throw new Error('Unable to log in')
        }
      } catch (error) {
        notification.error({
          message: 'Error',
          description: 'Unable to log in'
        })
      } finally {
        this.setState({
          loading: false
        })
      }
    })
  }
}

export default Form.create({})(Login)
