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
    <div className="p-4 rounded-xl border shadow-lg transition hover:-translate-y-1 duration-200 transform hover:shadow-2xl  w-full max-w-xs justify-center m-auto dark:border-gray-400">
      <div className="flex-col  flex justify-center items-center ">
        <div className="flex-shrink-0">
          <a href={github} className="block ">
            <Image
              src={profile}
              width={70}
              height={70}
              layout="fixed"
              alt="profile"
              className="rounded-full profile bg-white"
            />
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <p className="text-gray-700 text-xl dark:text-white md:text-xl capitalize">{name}</p>
          <p className="text-gray-600 text-sm md:text-md tracking-tight h-10 dark:text-gray-300 font-light">
            {desc}
          </p>
        </div>
      </div>
      <AiFillGithub
        href={github}
        className="text-xl  text-white dark:bg-gray-700 bg-primary rounded-full p-1 relative  w-8 h-8"
      />
    </div>
  )
}
export default MemberCard
