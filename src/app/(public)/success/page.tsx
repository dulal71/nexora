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
      <div className="flex justify-center items-center mt-10">
        <div className="space-y-2">
          <h1>Thank You!</h1>

        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          <strong>{customerEmail}</st>.
        </p>

        <p>
          If you have any questions, please email{" "}
          <a href="mailto:ahmeddulal4211@gmail.com">orders@example.com</a>.
        </p>
        </div>
      </div>
    );
  }

  return null;
}