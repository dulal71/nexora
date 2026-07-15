import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
    
  }>;
}

export default async function Success({ searchParams }:SuccessPageProps) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <section id="success" className="p-8 border border-gray-200 rounded-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
      <p className="text-gray-700">
        We appreciate your business! A confirmation email will be sent to{' '}
        <span className="font-semibold">{customerEmail}</span>. 
        If you have any questions, please email{' '}
        <a href="mailto:orders@example.com" className="text-blue-600 underline">
          orders@example.com
        </a>.
      </p>
    </section>
    )
  }
}