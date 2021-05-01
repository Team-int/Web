import Image from 'next/image'
export type memberProps = {
  name: string
  profile: string
  desc: string
  url: string
}
const MemberCard: React.FC<memberProps> = ({ name, profile, desc, url }: memberProps) => {
  return (
    <div className="p-2 ">
      <div className="flex-col  flex justify-center items-center ">
        <div className="flex-shrink-0">
          <a href={url} className="block ">
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
          <a href={url} className="text-gray-700 text-xl dark:text-white md:text-2xl">
            {name}
          </a>
          <span className="text-gray-600 text-sm md:text-md tracking-tight  dark:text-gray-300 font-light">
            {desc}
          </span>
        </div>
      </div>
    </div>
  )
}
export default MemberCard
