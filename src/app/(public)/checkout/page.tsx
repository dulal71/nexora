'use client'
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields");
      return;
    }

    // TODO: replace with actual order submission (API call)
    console.log("Order placed:", { formData, cartItems, total });
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Shipping info */}
      <div>
        <h1 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Shipping Details
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm dark:bg-black dark:text-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm dark:bg-black dark:text-white"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-md px-3 py-2 text-sm dark:bg-black dark:text-white"
              placeholder="House, Road, Area"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm dark:bg-black dark:text-white"
              placeholder="e.g. Sylhet"
            />
          </div>
        </div>
      </div>

      {/* Right: Order summary */}
      <div>
        <h1 className="text-xl font-semibold mb-4 text-black dark:text-white">
          Order Summary
        </h1>

        <div className="space-y-4 border rounded-md p-4">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center gap-3 border-b pb-3 last:border-none"
            >
              <Image 
              width={56}
              height={56}
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md border"
              />

              <div className="flex-1">
                <h2 className="text-sm font-medium text-black dark:text-white">
                  {item.name}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ${item.price} x {item.quantity}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-black dark:text-white">
                  ${item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-xs text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-semibold text-black dark:text-white pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <form action="/api/checkout_sessions" method="POST">
     <input type="hidden" name='price' value={total}></input>
      <section className="flex justify-center items-center">
        <button type="submit" className="bg-red-700 px-4 text-white font-medium rounded-full cursor-pointer" role="link">
          Checkout
        </button>
      </section>
    </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;