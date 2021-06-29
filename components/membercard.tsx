import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
export type memberProps = {
  name: string
  profile: string
  desc: string
  github: string
}
const MemberCard: React.FC<memberProps> = ({ name, profile, desc, github }: memberProps) => {
  return (
    <div className="membercard p-4  rounded-xl border border-gray-200 dark:border-gray-600 shadow-md transition hover:-translate-y-1 duration-100 transform hover:shadow-2xl m-auto">
      <div className="flex-col  flex justify-center items-center ">
        <div className="">
          <a href={github} className="block">
            <Image src={profile} className="rounded-full" width={70} height={70} alt={name} />
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <p className="text-gray-700 text-xl dark:text-white md:text-xl capitalize">{name}</p>
          <p className="text-gray-600 text-sm md:text-md tracking-tight h-10 dark:text-gray-300 font-light">
            {desc}
          </p>
        </div>
      </div>
      <a href={github} target="_blank" rel="noreferrer">
        <AiFillGithub className="text-xl  text-white dark:bg-gray-700 bg-primary rounded-full p-1 relative  w-8 h-8" />
      </a>
    </div>
  )
}
export default MemberCard
