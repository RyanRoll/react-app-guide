import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext
} from 'react'
import { Button } from 'antd'

import { MyContext } from '../Guide/context'

const Hooks = () => {
  const [data, setData] = useState({
    count: 0
  })
  const [name, setName] = useState('GiGi')

  // const context = useContext(MyContext)

  useEffect(() => {
    console.log('useEffect', data)
    return () => {
      // always trigger for cleaning if called
      console.log('after useEffect')
    }
  }, [data.count])

  useEffect(() => {
    return () => {
      // componentWillUnmount
      console.log('bye bye')
    }
  }, [])

  console.log('@@@@@@ universal', data.count)
  const onClick = useCallback(() => {
    console.log('onClick count', data.count)
    setData({ count: 100 })
  }, [data.count])

  const cachedCount = useMemo(() => {
    return data.count
  }, [data.count])

  const onClickName = useCallback(() => {
    setName(`${name}+`)
  }, [name])

  return (
    <>
      <div>Hello Hooks "{data.foo}"</div>
      <p>Name: {name}</p>
      <p>cachedCount: {cachedCount}</p>
      <Button onClick={onClick}>Set 100</Button>
      <Button onClick={() => setData({ count: data.count + 1 })}>
        Upate + 1
      </Button>
      <Button onClick={() => setData({ count: data.count })}>
        Don't Upate
      </Button>
      <Button onClick={() => setData({ count: data.count })}>
        Don't Upate
      </Button>
      <Button type="primary" onClick={onClickName}>
        + Name
      </Button>
    </>
  )
}

export default Hooks
