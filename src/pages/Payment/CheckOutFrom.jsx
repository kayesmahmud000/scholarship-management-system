
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js';

import './from.css';

import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const CheckOutFrom = ({scholar}) => {
    const stripe = useStripe();
    const {user}=useAuth()
 
  const elements = useElements();
  const [processing, setProcessing]= useState(false)
    const axiosSecure= useAxiosSecure()
      const [clientSecret, setClientSecret]=useState('')
    
      useEffect(()=>{
        if(scholar?.applicationFees>0){
            axiosSecure.post("/create-payment-intent", { applicationFee:scholar?.applicationFees})
            .then(res=>{
                // console.log(res.data.client_secret)
                setClientSecret(res.data.client_secret)
            })
           }
        
      }, [scholar, axiosSecure])
      console.log(clientSecret)


  
 

  const handleSubmit = async (event) => {
    setProcessing(true)
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
        toast.error('Payment failed')
        setProcessing(false)
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
        setProcessing(false)
        toast.error('Payment failed')
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card:card,
          billing_details: {
            name: user?.displayName,
            email:user?.email
          },
        },
      })
      if(confirmError){
        toast.error('Payment failed')
      }
      if(paymentIntent.status=== 'succeeded'){
        toast.success('Payment successful!')
      }
      console.log(paymentIntent)
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='px-6 btn text-lg  bg-purple-500  md:rounded-full md:px-10 md:pb-1 border-none text-white font-bold rounded-lg 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center'disabled={!stripe || !clientSecret || processing}>
       Payment
      </button>
    </form>
  );
};
 export default CheckOutFrom

