import React from 'react'

import { FruitContext } from './context'
import withFruit from './withFruit'

class Example2 extends React.Component {
  static contextType = FruitContext
  render() {
    const { example2Data, foo, data } = this.props
    const { apple, orange } = this.context
    console.log(foo, data)
    return (
      <div>
        Example2 @@@@@@ Apple: {apple}, Orange: {orange}, {example2Data}
        <p>data: {data}</p>
      </div>
    )
  }
}

export default withFruit(Example2)
