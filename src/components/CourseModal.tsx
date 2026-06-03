"use client";
import { IoClose } from 'react-icons/io5';

export function CourseModal({ label, open, opener }: { label: string; open: boolean; opener: (arg0: boolean) => void }) {

  if (!open) return null;

  return (
    <div 
      onClick={() => opener(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full min-h-screen bg-white rounded-none shadow-2xl p-8 md:p-12 flex flex-col items-center justify-center"
      >

        <button
          onClick={() => opener(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <IoClose size={24} />
        </button>

        <div className="text-center w-full mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11314b] tracking-wide mb-3">
            Course For {label}
          </h2>
          <p className="text-sm text-gray-500 font-light">
            Fill out the form below, to get access.
          </p>
        </div>

        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="First Name*"
              required
              className="w-full px-4 py-3.5 border border-gray-400 rounded-none focus:outline-none focus:border-black text-gray-900 placeholder-gray-400 font-light text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name*"
              required
              className="w-full px-4 py-3.5 border border-gray-400 rounded-none focus:outline-none focus:border-black text-gray-900 placeholder-gray-400 font-light text-sm"
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone*"
              required
              className="w-full px-4 py-3.5 border border-gray-400 rounded-none focus:outline-none focus:border-black text-gray-900 placeholder-gray-400 font-light text-sm"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full px-4 py-3.5 border border-gray-400 rounded-none focus:outline-none focus:border-black text-gray-900 placeholder-gray-400 font-light text-sm"
            />
          </div>

          <div className="w-full flex justify-end pt-2">
            <button
              type="submit"
              className="px-8 py-3.5 bg-black hover:bg-[#6cb9b8] text-white font-medium text-xs tracking-widest transition-colors duration-200 uppercase cursor-pointer "
            >
              Submit &rarr;
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}