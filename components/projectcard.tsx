import Image from 'next/image'
import Link from 'next/link'
import { ReactChild } from 'react'
export type ProjectProps = {
  name: string
  image: string
  desc: ReactChild
  url: string
}
const ProjectCard: React.FC<ProjectProps> = ({ name, image, desc, url }: ProjectProps) => {
  return (
    <Link href={url} passHref>
      <a href={url}>
        <div className="hover:cursor-pointer projectcard p-4 h-96  rounded-xl border border-gray-200 dark:border-gray-700 shadow-md transition hover:-translate-y-1 duration-100 transform hover:shadow-2xl justify-center">
          <div className="flex-col  flex justify-center items-center ">
            <div className="flex-shrink-0">
              <Image
                src={image}
                width={100}
                height={100}
                layout="fixed"
                alt={'preview for' + image}
                className=" bg-gray-100 rounded-lg"
              />
            </div>
            <div className="mt-2 text-center flex flex-col">
              <span className="text-gray-700 dark:text-white text-2xl  capitalize">{name}</span>
              <span className="text-gray-600 text-md dark:text-gray-300 font-light p-4 break-normal">
                {desc}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
export default ProjectCard
