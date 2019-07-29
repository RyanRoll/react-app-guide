import React from 'react'

// import {default: Example} from './Example'
import Example from './Example'
import Example2 from './Example2'

import withFruit from './withFruit'

class FruitVendor extends React.Component {
  render() {
    // dangerous!
    // const Example3 = withFruit(Example)
    return (
      <>
        <Example example1Data="I am example 1" />
        <Example2 example2Data="I am example 2" />
        {/* <Example3 example3Data="I am example 3" /> */}
      </>
    )
  }
}

export default FruitVendor
