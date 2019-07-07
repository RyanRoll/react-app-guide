import React from 'react'
import { Input } from 'antd'

import { MyContext } from '../Guide/context'

export class PhoneNumber extends React.Component {
  static contextType = MyContext
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
// PhoneNumber.contextType = MyContext
export default PhoneNumber
