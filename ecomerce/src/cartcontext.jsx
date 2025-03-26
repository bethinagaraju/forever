import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const CartContext = createContext();

// 2. Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [ likedItems, setLikedItems ] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  //ADD PRODCUTS TO LIKED

  const addLikedItem = (product) => {
    setLikedItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (!itemExists) {
        return [...prevItems, { ...product, quantity: 1 }];
      } 
      else{
        return prevItems;
      }
    });
  };

  //ADD produts to ORDERS

  // const addOrderItem = (product) => {
  //   setOrderItems((prevItems) => {
  //     return [...prevItems, { ...product, items: cartItems }];
  //   });
  // };

  const addOrderItem = (product) => {
    setOrderItems((prevItems) => {
      const newItem = {
        ...product,
        items: cartItems, // Add cart items to the new order item
      };
      return [...prevItems, newItem]; // Add the new item to the previous items
    });
  };



  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  //reove from like items

  const removeFromLiked = (productId) => {
    setLikedItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Function to update the quantity of an item
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Provide the context value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotal,
    likedItems,
    addLikedItem,
    removeFromLiked,
    addOrderItem,
    orderItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3. Create a custom hook to use the context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};