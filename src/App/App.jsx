import React from 'react'
import 'antd/dist/antd.css'

import './styles/App.css'
import logo from './logo.svg'
import { Form } from '../Form'
import { AppContext } from './context'

export class App extends React.Component {
  state = {
    username: '',
    phoneNumber: ''
  }
  render() {
    const { username, phoneNumber } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            GGGGGGG ss <code>src/App.js</code> and save to reload.
          </p>
          <div>username: {username}</div>
          <div>phoneNumber:{phoneNumber}</div>
        </header>
        <AppContext.Provider
          value={{
            userID: '123456',
            onPhoneChange: this.setPhoneChange
          }}
        >
          <Form url="/foo/bar" number={100} onSubmit={this.setUserName}>
            <h1>Hello</h1>
            <h1>Form</h1>
          </Form>
        </AppContext.Provider>
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
