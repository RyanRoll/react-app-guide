import React from 'react'
import { Input, Button, Skeleton } from 'antd'

import { MyContext } from '../Guide/context'
import PhoneNumber from '../PhoneNumber'
import styles from './styles/Form.module.scss'

export class Form extends React.Component {
  // connects to the context
  static contextType = MyContext
  // default state here
  state = {
    loading: true,
    inputValue: '',
    msg: '',
    msgRecords: []
  }

  // this is unnecessary
  // constructor(props) {
  //   super(props)
  //   this._onChange = this.onChange.bind(this)
  // }

  render() {
    const { children, url, number } = this.props
    const { loading, inputValue, msgRecords } = this.state
    console.log('render', inputValue, msgRecords, this.context)
    return (
      <div className={styles.form}>
        {loading && <Skeleton active={true} />}
        {!loading && (
          <>
            {children}
            userID: <h1>{this.context.userID}</h1>
            Messages:
            {msgRecords.map((msg, index) => {
              return (
                <div key={index} className={styles.msgPanel}>
                  <span className={styles.msg}>{msg}</span>
                  <Button
                    type="danger"
                    onClick={this.deleteMsg.bind(this, index)}
                  >
                    Remove
                  </Button>
                </div>
              )
            })}
            <h1>{inputValue}</h1>
            Name: <Input onChange={this.onChange} />
            Message: <Input onChange={this.onChangeMessage} />
            <PhoneNumber />
            <Button
              type="primary"
              icon="enter"
              style={{ marginTop: 20 }}
              onClick={this.onClickButton}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    )
  }
  componentDidMount() {
    // like calling an api
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  deleteMsg = index => {
    const { msgRecords } = this.state
    // js array delete api
    msgRecords.splice(index, 1)
    this.setState({
      msgRecords
    })
  }
  onChange = event => {
    // const value = event.target.value  // same as below
    const {
      target: { value }
    } = event
    this.setState({
      inputValue: value
    })
  }
  onChangeMessage = event => {
    const {
      target: { value }
    } = event
    this.setState({
      msg: value
    })
  }
  onClickButton = () => {
    const { onSubmit } = this.props
    const { msgRecords, msg } = this.state
    // if (onSubmit) {
    //   onSubmit()
    // }
    // same as above
    onSubmit && onSubmit(this.state.inputValue)
    this.setState({
      msgRecords: [...msgRecords, msg]
    })
  }
}
