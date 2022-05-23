import React from 'react'
const UserContext = React.createContext('Aqualink') //IF we comment user provider in App.js it will print Aqualink 

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export { UserProvider, UserConsumer }
export default UserContext