import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getSession } from '@/lib/api/userSession'

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
     const formData = await request.formData()
     const price = Number(formData.get("price"));
     const user = await getSession()
     if (!user) {
  return NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  );
}
   
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
metadata: {
  price: String(price),
  name: user.name ?? "",
  userId: user.id,
  status: "Completed",
  userEmail: user.email ?? "",
},
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
   if (!session.url) {
  throw new Error("Stripe session URL not found");
}

return NextResponse.redirect(session.url, 303);

} catch (err: unknown) {
  if (err instanceof Error) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { error: "Something went wrong" },
    { status: 500 }
  );
}
}