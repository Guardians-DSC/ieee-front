import Reacr, { createContext, useContext } from 'react'

const UserProvider = ({children}) => {
  <UserContext.Provider
    value={{
      userName,
      email,
      isAdmin,
      department
    }}
  >
    {children}
  </UserContext.Provider>
}

const useUser = ({children}) => {
  const context = useContext(UserContext)
  const { userName, email, isAdmin, department } = context;

  return { userName, email, isAdmin, department };
}

export default UserProvider;