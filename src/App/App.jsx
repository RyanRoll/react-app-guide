import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Menu } from 'antd'

import Main from '../Main'
import Login from '../Login'
import LoginFn from '../LoginFn'
import Guide from '../Guide'
import PrivateRoute from '../PrivateRoute'
import FruitVendor from '../HOCs/FruitVendor'
import Hooks from '../Hooks'

// Single Page Application (SPA)
// react-router
// react-cookie
// axios (async http request)
// lodash
// body-parser

export class App extends React.Component {
  render() {
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Main</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/hoc">FruitVendor</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/hooks">Hooks</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/guide">Guide</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <PrivateRoute path="/login" component={LoginFn} />
          <Route path="/guide" component={Guide} />
          <Route path="/hoc" component={FruitVendor} />
          <Route path="/hooks" component={Hooks} />
          <PrivateRoute path="/" exact component={Main} />
        </Switch>
      </>
    )
  }
}
