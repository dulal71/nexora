import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaCheckCircle, FaEnvelope, FaArrowRight } from "react-icons/fa";

interface SuccessPageProps {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function Success({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const customerEmail = session.customer_details?.email ?? "";
  const amountTotal = session.amount_total;
  const currency = session.currency?.toUpperCase() ?? "USD";

  if (status === "open") {
    redirect("/");
  }

  if (status === "complete") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            {/* Success icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                <FaCheckCircle className="h-9 w-9 text-green-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-xl font-semibold text-neutral-900">
                Payment successful
              </h1>
              <p className="mt-2 text-sm text-neutral-500">
                Thank you for your purchase.
              </p>
            </div>

            {/* Order summary */}
            {amountTotal != null && (
              <div className="mt-6 rounded-xl bg-neutral-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Amount charged</span>
                  <span className="font-medium text-neutral-900">
                    {(amountTotal / 100).toLocaleString(undefined, {
                      style: "currency",
                      currency,
                    })}
                  </span>
                </div>
              </div>
            )}

            {/* Confirmation email note */}
            {customerEmail && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-neutral-100 bg-white p-4 text-sm text-neutral-600">
                <FaEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <p>
                  A confirmation email has been sent to{" "}
                  <span className="font-medium text-neutral-900">
                    {customerEmail}
                  </span>
                  .
                </p>
              </div>
            )}

            {/* CTA */}
            <Link
              href="/"
              className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Continue shopping
              <FaArrowRight className="h-4 w-4" />
            </Link>

            {/* Support line */}
            <p className="mt-6 text-center text-xs text-neutral-400">
  Need help?{" "}
  <a
    href="mailto:orders@example.com"
    className="font-medium text-neutral-600 hover:underline"
  >
    orders@example.com
  </a>
</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}