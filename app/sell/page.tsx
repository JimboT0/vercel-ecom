"use client"

import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';

import React from 'react';

export default function Page() {
  const [state, handleSubmit] = useForm("xwkdjavp");

  if (state.succeeded) {
    return (
      <div className='mb-20'>
        <div className=' bg-purple-200 border-black p-10 rounded-lg w-[80%] mx-auto'>
          <p className="block w-[80%] mx-auto rounded-md mb-10 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thanks for your message!</p>
        </div>

        <div className=' bg-purple-200 border-black p-10 rounded-lg w-[80%] mx-auto'>
          <p className="block w-[80%] mx-auto rounded-md mb-5 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm">Please consider sharing this website with friends if you found it interesting or helpful</p>
        </div>
      </div>

    )
  }

  return (

    <>
      <div className='flex flex-row'>
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <Image
              src="/daytonapic.png"
              alt="Daytona"
              width={400}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>




          <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full p-6">
              <h1 className="text-3xl font-semibold mb-6 text-black text-center">Contact Us</h1>
              <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center"> </h1>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                  <ValidationError
                    prefix="tel"
                    field="phone-input"
                    errors={state.errors}
                  />
                </div>


                <div className="rounded-md">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="text"
                    name="text"
                    className="mt-1 p-2 resize-y rounded-md w-full border focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="Photo" className="block text-sm font-medium text-gray-700">
                    Send an Image <span className='text-xs font-thin'>(Optional)</span>

                  </label>
                  <div className="mt-2.5 bg-white rounded-xl font-lato pl-1">
                    <input
                      type="file"
                      name="attachment"
                      accept="image/png, image/jpeg"
                      className="p-2 border-xl"
                    />


                    <ValidationError
                      prefix="file"
                      field="file"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-5 w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >Submit</button>
                </div>
              </form>
              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>Want to sell a watch?<a href="/sell" className="text-black hover:underline">Click here</a>
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
