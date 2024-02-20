import React from 'react'
import ProductCard from '../components/ProductCard'
import PRODUCT from '../ProductInfo'
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from '../components/CheckoutForm';

type Props={}

const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'inr',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

const Checkout = (props:Props) => {
    const stripePromise = loadStripe('pk_test_51OdbewSH8jMlF9TuHSHDtUz8EldkTqrTe60xx1zQdVs3hPgL3rs4sII1Y6c6LLzfjCzFE90yIE9gp8FLbJWXTIFr00sOMXhbwg');

    return(
        <div className='flex container mt-8'><ProductCard{...PRODUCT}/>
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm/>
        </Elements>
        </div>
    )
}

export default Checkout