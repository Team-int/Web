import Image from 'next/image'
export type memberProps = {
  name: string
  profile: string
  desc: string
  url: string
}
const MemberCard: React.FC<memberProps> = ({ name, profile, desc, url }: memberProps) => {
  return (
    <div className="p-2 w-50">
      <div className="flex-col  flex justify-center items-center ">
        <div className="flex-shrink-0">
          <a href={url} className="block relative ">
            <div className="profile border-gray-300 dark:border-gray-500">
              <Image
                src={profile}
                width={70}
                height={70}
                alt="profile"
                className="rounded-full profile"
              />
            </div>
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <a href={url} className="text-gray-600 dark:text-white text-xl">
            {name}
          </a>
          <span className="text-gray-500 text-sm dark:text-gray-300 font-light">{desc}</span>
        </div>
      </div>
    </div>
  )
}
export default MemberCard
