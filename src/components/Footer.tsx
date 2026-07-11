"use client";

import { BsArrowUp } from "react-icons/bs";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface PaymentCard {
  id: string;
  label: string;
}

const socialIcons: IconType[] = [FaFacebookF, FaXTwitter, FaInstagram, FaYoutube];

const paymentCards: PaymentCard[] = [
  { id: "visa", label: "VISA" },
  { id: "mastercard", label: "MAST" },
  { id: "amex", label: "AMEX" },
  { id: "paypal", label: "PAYP" },
  { id: "diners", label: "DINE" },
  { id: "discover", label: "DISC" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-gray-200 dark:border-gray-800 relative">
      {/* Top offer bar */}
      <div className="bg-black dark:bg-white text-white dark:text-black text-sm md:text-md lg:text-2xl py-3 px-4 text-center font-bold tracking-wide">
        END OF SEASON SALE LIVE NOW | FLAT 50% OFF | WOMEN TOPS 50% OFF | MEN
        JEANS 30% OFF
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        {/* Contact Us */}
        <div>
          <h4 className="font-bold uppercase text-xs mb-4 tracking-wide">
            Contact Us
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            55 Gallaxy Enque,
            <br />
            2568 street, 23568 NY
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              (440) 000 000 0000
            </span>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              sales@avonetheme.com
            </span>
          </p>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="font-bold uppercase text-xs mb-4 tracking-wide">
            Company Info
          </h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              About us
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Contact Us
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Career
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              My Account
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Orders and Returns
            </li>
          </ul>
        </div>

        {/* Quick Shop */}
        <div>
          <h4 className="font-bold uppercase text-xs mb-4 tracking-wide">
            Quick Shop
          </h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Fashion
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Men
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Furniture
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Home Decor
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Shoes
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-bold uppercase text-xs mb-4 tracking-wide">
            Customer Service
          </h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Help & FAQs
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Returns Policy
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Terms & Conditions
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Support Center
            </li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h4 className="font-bold uppercase text-xs mb-4 tracking-wide">
            Follow the Latest Trend and Style
          </h4>
          <form className="flex mb-4 max-w-xs">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-xs outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-4 py-2 uppercase whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Signup
            </button>
          </form>

          <div className="flex gap-3">
            {socialIcons.map((Icon: IconType, index: number) => (
              
              <a  key={index}
                href="#"
                className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
        {/* ↑ Newsletter div closed here */}
      </div>
      {/* ↑ Grid container div closed here */}

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            © 2026, Avone. All rights reserved. | Designed by AdornThemes
          </p>

          {/* Payment icons */}
          <div className="flex gap-2">
            {paymentCards.map((card: PaymentCard) => (
              <div
                key={card.id}
                className="h-5 w-8 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[6px] font-bold uppercase text-gray-500 dark:text-gray-400"
              >
                {card.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 size-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
      >
        <BsArrowUp className="size-5" />
      </button>
    </footer>
  );
};

export default Footer;