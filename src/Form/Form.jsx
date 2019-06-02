import React from 'react'
import { Input, Button } from 'antd'

import './styles/Form.scss'

export class Form extends React.Component {
  // inputValue = ''
  state = {
    inputValue: ''
  }

  // constructor(props) {
  //   super(props)
  //   this._onChange = this.onChange.bind(this)
  // }
  render() {
    const { children, url, number } = this.props
    const { inputValue } = this.state
    console.log('render', inputValue)
    return (
      <div className="form">
        {children}
        <h1>{inputValue}</h1>
        <Input onChange={this.onChange} />
        <Button
          type="primary"
          icon="enter"
          style={{ marginTop: 20 }}
          onClick={this.onClickButton}
        >
          Submit
        </Button>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  onChange = event => {
    // const value = event.target.value
    // this.inputValue = value
    const {
      target: { value }
    } = event
    this.setState({
      inputValue: value
    })
  }
  onClickButton = () => {
    console.log('click!', this.state.inputValue)
  }
}
