import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

export default function RetreatSignUp() {

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <>
      <div className="w-full bg-black flex items-start justify-center pb-10">
        <h1 className="text-2xl md:text-[50px] text-white font-bold">Retreat - Sign Up</h1>
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-2xl w-full bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-10">

          <form className="space-y-6">

            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                Email *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <IoMailOutline size={18} />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1">
                Phone *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <CiPhone size={18} />
                </span>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-800 mb-1">
                Mailing Address *
              </label>
              <textarea
                id="address"
                rows={3}
                placeholder="Mailing Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div>
              <label htmlFor="leaderDetail" className="block text-sm font-semibold text-gray-800 mb-1">
                Is there a particular retreat and leader you want to go through abiding with?
              </label>
              <textarea
                id="leaderDetail"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div>
              <label htmlFor="monthSelect" className="block text-sm font-semibold text-gray-800 mb-1">
                What month of the year would you like to attend a retreat? *
              </label>
              <select
                id="monthSelect"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black text-gray-900 cursor-pointer"
              >
                <option value="">Select</option>
                {months.map((month) => (
                  <option key={month} value={month.toLowerCase()}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-800">
                Are you familiar with Abiding? *
              </label>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id="option1"
                    name="familiarity"
                    required
                    className="mt-1 h-4 w-4 text-black border-gray-300 focus:ring-black accent-black cursor-pointer"
                  />
                  <label htmlFor="option1" className="text-sm text-gray-700 cursor-pointer select-none">
                    1st Time Abide. (Have not gone through Abiding before, but would like to)
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id="option2"
                    name="familiarity"
                    className="mt-1 h-4 w-4 text-black border-gray-300 focus:ring-black accent-black cursor-pointer"
                  />
                  <label htmlFor="option2" className="text-sm text-gray-700 cursor-pointer select-none">
                    Have gone through Abiding and I am interested in attending a weekend retreat next year
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id="option3"
                    name="familiarity"
                    className="mt-1 h-4 w-4 text-black border-gray-300 focus:ring-black accent-black cursor-pointer"
                  />
                  <label htmlFor="option3" className="text-sm text-gray-700 cursor-pointer select-none">
                    Have gone through Abiding and a weekend retreat, and I am interested in leading a group.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id="option4"
                    name="familiarity"
                    className="mt-1 h-4 w-4 text-black border-gray-300 focus:ring-black accent-black cursor-pointer"
                  />
                  <label htmlFor="option4" className="text-sm text-gray-700 cursor-pointer select-none">
                    I am interested in hosting a weekend retreat.
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="marketingConsent"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black accent-black cursor-pointer"
              />
              <label htmlFor="marketingConsent" className="text-xs md:text-sm text-gray-600 leading-relaxed cursor-pointer select-none">
                I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from Abide Now. Message frequency varies. Message & data rates may apply. You can reply STOP to unsubscribe at any time.
              </label>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-md shadow transition-colors duration-200 uppercase tracking-wider text-sm"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}