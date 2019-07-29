import React from 'react'
// import 'antd/dist/antd.css'

import './styles/Guide.css'
import logo from './logo.svg'
import { Form } from '../Form'
import { MyContext } from './context'

export class Guide extends React.Component {
  state = {
    username: '',
    phoneNumber: ''
  }
  render() {
    const { username, phoneNumber } = this.state
    return (
      <div className="guide">
        <header className="guide-header">
          <img src={logo} className="guide-logo" alt="logo" />
          <p>
            GGGGGGG ss <code>src/Guide.js</code> and save to reload.
          </p>
          <div>username: {username}</div>
          <div>phoneNumber:{phoneNumber}</div>
        </header>
        <MyContext.Provider
          value={{
            userID: '123456',
            onPhoneChange: this.setPhoneChange
          }}
        >
          <Form url="/foo/bar" number={100} onSubmit={this.setUserName}>
            <h1>Hello</h1>
            <h1>Form</h1>
          </Form>
        </MyContext.Provider>
      </div>
    )
  }
  setUserName = username => {
    this.setState({
      username
    })
  }
  setPhoneChange = phoneNumber => {
    console.log('phoneNumber', phoneNumber)
    this.setState({
      phoneNumber
    })
  }
}

export default Guide
