import {createContext, useState} from 'react'


export const UserContext = createContext()

// criar o provider, é o elemento que "abraça" os outros
export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState('');

    return(
        // Definir os valores disponiveis dentro do context provider
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )


}