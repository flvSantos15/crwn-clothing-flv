import { CART_ACTION_TYPES } from './cartTypes'

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

export const setIsCartOpen = (bool) => {
  return { type: CART_ACTION_TYPES.SET_CART_OPEN, payload: bool }
}

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear)
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
