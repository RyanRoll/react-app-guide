import React from 'react'

import { FruitContext } from './context'

const withFruit = Component => {
  class Fruit extends React.Component {
    state = {
      foo: 'bar',
      data: ''
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: 'new Api data'
        })
      }, 5000)
    }
    render() {
      const apple = 1
      const orange = 2
      const { foo, data } = this.state
      if (!data) {
        return null
      }
      return (
        <FruitContext.Provider value={{ apple, orange }}>
          <Component foo={foo} data={data} {...this.props}>
            Hello World {apple}
          </Component>
        </FruitContext.Provider>
      )
    }
  }
  return Fruit
}

export default withFruit
