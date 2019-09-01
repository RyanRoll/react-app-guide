import React, { useCallback, useState, useMemo } from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd'
import { useCookies } from 'react-cookie'

import Main from '../Main'
// import Login from '../Login'
import LoginFn from '../LoginFn'
import Guide from '../Guide'
import PrivateRoute from '../PrivateRoute'
import FruitVendor from '../HOCs/FruitVendor'
import Hooks from '../Hooks'
import { AppContext } from './context'

// Single Page Application (SPA)
// react-router
// react-cookie
// axios (async http request)
// lodash
// body-parser

export const App = withRouter(props => {
  const {
    location: { pathname },
    history
  } = props
  const [cookies, , removeCookie] = useCookies()
  const [isLogin, updateLoginStatus] = useState(!!cookies.userID)
  const logout = useCallback(() => {
    updateLoginStatus(false)
    removeCookie('userID')
    history.push('/login')
  }, [history])
  const context = useMemo(
    () => ({
      updateLoginStatus
    }),
    [updateLoginStatus]
  )
  return (
    <AppContext.Provider value={context}>
      <Menu mode="horizontal" defaultSelectedKeys={[pathname]}>
        <Menu.Item key="/main">
          <Link to="/">Main</Link>
        </Menu.Item>
        <Menu.Item key="/hoc">
          <Link to="/hoc">FruitVendor</Link>
        </Menu.Item>
        <Menu.Item key="/hooks">
          <Link to="/hooks">Hooks</Link>
        </Menu.Item>
        <Menu.Item key="/guide">
          <Link to="/guide">Guide</Link>
        </Menu.Item>
        {!isLogin && (
          <Menu.Item key="/login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
        {isLogin && (
          <Menu.Item key="/logout" style={{ float: 'right' }}>
            <Button id="logoutBtn" icon="logout" onClick={logout}>
              Logout
            </Button>
          </Menu.Item>
        )}
      </Menu>
      <Switch>
        <PrivateRoute path="/login" component={LoginFn} />
        <Route path="/guide" component={Guide} />
        <Route path="/hoc" component={FruitVendor} />
        <Route path="/hooks" component={Hooks} />
        <PrivateRoute path="/" exact component={Main} />
      </Switch>
    </AppContext.Provider>
  )
})

export default App
