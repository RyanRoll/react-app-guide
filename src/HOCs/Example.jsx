import React from 'react'

import { FruitContext } from './context'
import withFruit from './withFruit'

class Example extends React.Component {
  static contextType = FruitContext
  render() {
    const { example1Data, foo, data, children } = this.props
    const { apple, orange } = this.context
    console.log(foo, data)
    return (
      <div>
        Example --- Apple: {apple}, Orange: {orange}, {example1Data}
        <p>data: {data}</p>
        <p>{children}</p>
      </div>
    )
  }
}

export default withFruit(Example)
