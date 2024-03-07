import Image from 'next/image'

import React from 'react'


const hero = () => {
    return (
        <div>
            <section className="mb-20">
                <div className=" px-6 text-center md:px-12 lg:text-left dark:bg-gradient-to-r from-stone-400 from-40% to-slate-700">                  
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-10">
                                <Image
                                    src="/Origintime.png"
                                    alt="ORIGINTIME"
                                    width={400}
                                    height={400}
                                    className="w-full rounded-lg p-5 pb-10 md:p-20" />
                                <div>
                                    <div className="md:pl-28 content-center">
                                        <a
                                            className="w-[80%] md:w-[40%] text-center mb-2 inline-block rounded bg-black pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-xl transition duration-150 ease-in-out hover:bg-primary-600 hover:outline focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                            href="/shop"
                                            role="button"
                                        >
                                            Shop Watches
                                        </a>
                                        <a
                                            className=" w-[80%] md:w-[40%] text-center inline-block rounded pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black hover:shadow-xl hover:outline focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
                                            href="/blog"
                                            role="button"
                                        >
                                            Read
                                        </a>
                                    </div>
                                </div>


                            </div>
                            <div className=" hidden md:block">
                                <Image
                                    src="/daytonapic.png"
                                    alt="Daytona"
                                    width={400}
                                    height={400}
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default hero
