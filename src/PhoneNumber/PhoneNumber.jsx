import React from 'react'
import { Input } from 'antd'

import { AppContext } from '../App/context'

export class PhoneNumber extends React.Component {
  static contextType = AppContext
  state = {
    number: ''
  }
  render() {
    return (
      <>
        Phone: <Input onChange={this.onChange} />
      </>
    )
  }
  onChange = event => {
    const {
      target: { value }
    } = event
    const { onPhoneChange } = this.context
    onPhoneChange && onPhoneChange(value)
    this.setState({
      number: value
    })
  }
}
// same as line:7
// PhoneNumber.contextType = AppContext
export default PhoneNumber
