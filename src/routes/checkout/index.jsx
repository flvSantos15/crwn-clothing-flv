import { useCart } from '../../contexts/cartContext'

export default function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart()

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <span>{item.quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>decrement</span>
              <span onClick={() => addItemToCart(item)}>increment</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
