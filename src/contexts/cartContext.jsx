import { createContext, useContext, useReducer } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  )

  // check if quantuty is equal to 1, if it's remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingCartItem.id)
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((item) =>
    item.id === existingCartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  itemsAmount: 0,
  totalPrice: 0
})

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_OPEN: 'SET_CART_OPEN'
}

const INITIAL_STATE = {
  itemsAmount: 0,
  totalPrice: 0,
  cartItems: [],
  isCartOpen: false
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { cartItems, isCartOpen, itemsAmount, totalPrice } = state

  const updateCartItemsReducer = (newCartItems) => {
    const itemsAmount = newCartItems.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)

    const totalPrice = newCartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity
    }, 0)

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: { cartItems: newCartItems, itemsAmount, totalPrice }
    })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_OPEN,
      payload: bool
    })
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        itemsAmount,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
// 97

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
