import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/cartSelector'
import { selectCurrentUser } from '../../store/user/userSelector'

import { BUTTON_TYPE_CLASSES } from '../button/index'

import { PaymentFormContainer, FormContainer, PaymentButton } from './styles'

export function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const [isPrecessingPayment, setIsPrecessingPayment] = useState(false)

  const handlePayment = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsPrecessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret }
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.name : 'Guest'
        }
      }
    })

    setIsPrecessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Success')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isPrecessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
