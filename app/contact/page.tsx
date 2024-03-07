"use client"

import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';

import React from 'react';

export default function Page() {
  const [state, handleSubmit] = useForm("xrgwvree");

  if (state.succeeded) {
    return (

        <section className="flex items-center xl:h-screen font-poppins">

          <div className="justify-center content-center mx-auto pl-20">

            <div className="flex flex-wrap ">




              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 md:mt-48 ">

                <div className="relative">

                  <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">

                    About Us

                  </h1>

                  <h1 className="pl-2 text-3xl font-bold border-l-8 border-red-500 md:text-5xl dark:text-white">

                    Welcome to our site

                  </h1>

                </div>

                <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,

                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

                  labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur

                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad

                  minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                </p>

                <a href="#"

                  className="px-4 py-3 text-gray-50 transition-all transform bg-red-500 rounded-[80px] hover:bg-red-400 dark:hover:text-gray-100 dark:text-gray-100 ">

                  Learn more

                </a>

              </div>

            </div>

          </div>

        </section>

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

                  {/* <div className="sm:col-span-2">
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
                </div> */}

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
