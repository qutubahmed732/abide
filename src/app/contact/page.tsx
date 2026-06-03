export default function ContactPage() {
  return (
    <>
      <div className="w-full bg-black flex items-start justify-center pb-10">
        <h1 className="text-2xl md:text-[50px] text-white font-bold">Contact Us</h1>
      </div>

      <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
        <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-6 md:p-12 flex flex-col justify-center bg-white md:order-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs md:text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                  By checking this box, I consent to receive transactional, marketing, and promotional messages related to my account, orders, or services have requested. These messages may include appointment reminders, order confirmations, account notifications, special offers, discounts, and new product updates, among others. Message frequency may vary. Message & Data rates may apply. Reply STOP to opt-out.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded shadow transition-colors duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="w-full h-[400px] md:h-full min-h-[400px] relative bg-gray-200 md:order-1">
            <iframe
              title="Salt Lake City Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-111.97343715878847!3d40.75114670208627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528b27402e6131%3A0x808e72ef6d388129!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1717340000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  )
}