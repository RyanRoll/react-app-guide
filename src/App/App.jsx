import React from 'react'
import 'antd/dist/antd.css'

import './styles/App.css'
import logo from './logo.svg'
import { Form } from '../Form'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GGGGGGG ss <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form url="/foo/bar" number={100}>
        <h1>Hello</h1>
        <h1>Form</h1>
      </Form>
    </div>
  )
}
