import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import { withCookies } from 'react-cookie'

class Main extends React.Component {
  state = {
    email: '',
    members: 0
  }
  render() {
    const { email, members } = this.state
    return (
      <>
        <h1>Welcome {email}!</h1>
        <h2>
          We have {members} {members > 1 ? 'users' : 'user'}!
        </h2>
      </>
    )
  }
  async componentDidMount() {
    const { cookies } = this.props
    const userID = cookies.get('userID') || ''
    const response = await axios.get(`/api/user/${userID}`)
    const { email, members } = _.get(response, 'data', {})
    this.setState({
      email,
      members
    })
  }
}

export default withCookies(Main)
