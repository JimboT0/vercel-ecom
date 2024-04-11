"use client"


import { getProjects } from "@/sanity/sanity-utils"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import Image from "next/image"


export default async function Page() {

  const projects = await getProjects();

  return (
    <div>
      <div className='pb-10'>

        <header className="sticky top-0 z-40 border-b bg-background flex justify-between items-center px-4">
          <div className="p-6">
          </div>
          <div className="flex-1">
            {projects.map((project) => (
              <div key={project._id} className="font-extrabold py-5 text-center"><a href={project.url}>{project.name}</a></div>
              
            ))
            }
          </div>
          <div>
            <ThemeToggle />
          </div>
        </header>



        <div className='flex flex-col'>
          <div className='flex justify-center items-center'>
            <Image src="https://placehold.co/600x400" alt="" width="400" height="600" className='p-5 flex items-center justify-center' />
          </div>
          <div className='p-3 m-5' >
            <p className='text-sm text-center'><span className='font-extrabold p-4'>Welcome to the Rockefeller </span><br />Please make use of our online Room service, Shop and Activity Booking offerings</p>
          </div>
          <div className='grid grid-rows-3 gap-2'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>Room Service</button>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>Shop</button>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>Activities</button>
          </div>
        </div>

{/* puta */}


      </div>
      {/* <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div> */}

    </div>
  )
}


