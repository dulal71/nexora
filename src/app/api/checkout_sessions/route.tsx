import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getSession } from '@/lib/api/userSession'

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
     const formData = await request.formData()
     const price = formData.get('price')
     const user = await getSession()
   
    const session = await stripe.checkout.sessions.create({
       customer_email:user?.email,
     line_items: [
               {
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'nexora',
      },
      unit_amount: price * 100,
    },
    quantity: 1,
  },
],
metadata:{
  price:price,
  name:user.name,
  userId:user.id,
  status:'Completed',
  userEmail:user.email
},
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}