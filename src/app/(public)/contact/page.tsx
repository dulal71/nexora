import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-black dark:text-white mb-2">Drop Us A Line</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Have a question? We're here to help</p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Form */}
        <form className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-3 border border-gray-300 w-full outline-none focus:border-black" />
            <input type="email" placeholder="Email" className="p-3 border border-gray-300 w-full outline-none focus:border-black" />
          </div>
          <input type="tel" placeholder="Phone Number" className="p-3 border border-gray-300 w-full outline-none focus:border-black" />
          <input type="text" placeholder="Subject" className="p-3 border border-gray-300 w-full outline-none focus:border-black" />
          <textarea placeholder="Message" rows={5} className="p-3 border border-gray-300 w-full outline-none focus:border-black"></textarea>
          <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 font-bold hover:bg-gray-800 transition">
            SEND
          </button>
        </form>

        {/* Info Sidebar */}
        <div className="bg-gray-50 dark:bg-black border p-8">
          <FaMapMarkerAlt className="mb-4 text-xl" />
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-sm text-black dark:text-white uppercase mb-1">Address:</h3>
              <p className="text-gray-600">55 Gallaxy Enque, 2568 steet, 23568 NY</p>
              <p className="text-gray-600 font-semibold">PHONE: +1 (440) 568 4568</p>
              <p className="text-gray-600 font-semibold">EMAIL: sales@yousite.com</p>
            </div>
            
            <hr />

            <div>
              <h3 className="font-bold text-sm uppercase mb-1">Opening Hours</h3>
              <p className="text-gray-600">Mon - Sat : 9am - 11pm</p>
              <p className="text-gray-600">Sunday: 11am - 5pm</p>
            </div>

            <hr />

            <div>
              <h3 className="font-bold text-sm uppercase mb-3">Stay Connected</h3>
              <div className="flex gap-3">
                <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                <FaTwitter className="cursor-pointer hover:text-blue-400" />
                <FaInstagram className="cursor-pointer hover:text-pink-600" />
                <FaYoutube className="cursor-pointer hover:text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}