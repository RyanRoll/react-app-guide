import React from 'react'

const defaultValue = {
  userID: '',
  onPhoneChange: null
}
export const AppContext = React.createContext(defaultValue)
