import {createContext, useState} from 'react'


export const CartContext = createContext()

// criar o provider, é o elemento que "abraça" os outros
export const CartContextProvider = ({children}) => {

    const [productsCart, setProductsCart] = useState([])

    return(
        // Definir os valores disponiveis dentro do context provider
        <CartContext.Provider value={{productsCart, setProductsCart}}>
            {children}
        </CartContext.Provider>
    )


}