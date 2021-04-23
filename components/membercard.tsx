export type memberProps = {
  name: string
  profile: string
  desc: string
  url: string
}
const MemberCard: React.FC<memberProps> = ({ name, profile, desc, url }: memberProps) => {
  return (
    <div className="p-4">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <a href={url} className="block relative">
            <img
              alt="profile"
              src={profile}
              className="mx-auto object-cover rounded-full h-20 w-20 border border-gray-200 "
            />
          </a>
        </div>

        <div className="mt-2 text-center flex flex-col">
          <a href={url} className="text-gray-600 dark:text-white text-xl font-medium">
            {name}
          </a>
          <span className="text-gray-500 text-sm">{desc}</span>
        </div>
      </div>
    </div>
  )
}
export default MemberCard
