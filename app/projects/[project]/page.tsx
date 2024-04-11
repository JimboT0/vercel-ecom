import { ThemeToggle } from "@/components/theme-toggle";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image"


type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <div>
                <div className='pb-10'>

                    <header className="sticky top-0 z-40 border-b bg-background flex justify-between items-center px-4">
                        <div className="p-6">
                        </div>
                        <div className="flex-1">
                            {project && <h1 className="font-extrabold py-5 text-center">{project.name}</h1>}
                        </div>
                        <div>
                            <ThemeToggle />
                        </div>
                    </header>



                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            {project && <img src={project.image} alt={project.image} className='p-5 flex items-center justify-center w-[400px] h-[300px]' />}
                        </div>
                        <div className='p-3 m-5' >
                            <div className="text-lg text-gray-700 mt-5">
                                {project && <PortableText value={project.content} />}
                            </div>
                        </div>
                        <div className='grid grid-rows-3 gap-2'>
                            {project && <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className='text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>{project.name}</a>}
                            {project && <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className='text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>{project.name}</a>}
                            {project && <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className='text-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-sm mx-5 '>{project.name}</a>}
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
} 