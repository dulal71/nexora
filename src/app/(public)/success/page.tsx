import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function Success({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const customerEmail = session.customer_details?.email ?? "";

  if (status === "open") {
    redirect("/");
  }

  if (status === "complete") {
    return (
      <div>
  <p className="text-neutral-600">
    Thank you for your purchase! A confirmation email has been sent to{" "}
    <span className="font-medium text-neutral-900">{customerEmail}</span>.
  </p>

  <p className="mt-3 text-neutral-600">
    If you have any questions or need assistance, please contact our support
    team at{" "}
    <a
      href="mailto:ahmeddulal4211@gmail.com"
      className="font-medium text-blue-600 hover:underline"
    >
      orders@example.com
    </a>
    .
  </p>
</div>
    );
  }

  return null;
}