import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
   {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '3',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '4',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '5',
      name: "Guarana lata",
      price: 6.00
    },
  ]);

  const [produtosComQuantidades, setProdutosComQuantidades] = useState([]);

  useEffect(() => {
    const produtosAtualizados = products.map(produto => ({
      ...produto,
      quantItem: 1,
    }));

    // Atualiza o estado de quantidades
    setProdutosComQuantidades(produtosAtualizados);
  }, [products]);

  const [productsCart, setProductsCart] = useState([]);

  return (
    // Definir os valores disponíveis dentro do context provider
    <CartContext.Provider value={{ productsCart, setProductsCart, produtosComQuantidades, setProdutosComQuantidades, products }}>
      {children}
    </CartContext.Provider>
  );
};
