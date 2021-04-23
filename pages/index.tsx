import React from 'react'
import MemberCard from '../components/membercard'
import { memberProps } from '../components/membercard'

const members: Record<string, memberProps> = {
  chul0721: {
    name: 'Chul0721',
    profile: '/static/images/members/chul.png',
    url: 'https://github.com/chul0721',
    desc: 'Founder, Full stack developer',
  },
  JcdeA: {
    name: 'JcdeA',
    profile: '/static/images/members/io.png',
    url: 'https://github.com/JcdeA',
    desc: 'Full stack developer, Designer',
  },
}

const Home: React.FC = () => {
  return (
    <>
      <div className=" hero flex sm:px-0 text-white bg-gray-600">
        <img
          alt="bg"
          src="/static/images/mountain.svg"
          className="absolute hero bg-contain w-full object-cover "
        />
        <div className="inset-0 mt-14 md:mt-20  hero bg-black opacity-25 absolute z-0"></div>
        <div className="mx-2 px-4 hero-text z-10 ">
          <div className="text-6xl md:text-9xl font-bold ">Team int</div>

          <p className="text-xl md:text-3xl  md:pt-2 sm:ml-5">We live to code.</p>

          <div className="mt-5">
            <a className="bg-white  text-black tracking-tight text-semibold  text-base py-2 px-3 text-semibold rounded-md shadow sm:ml-5">
              더 알아보기
            </a>
          </div>
        </div>
      </div>
      <div className="transform -translate-y-10 bg-white mx-auto  rounded-lg md:rounded-3xl">
        <div className="p-4 mx-auto max-w-5xl pt-12  ">
          <div className=" text-center  text-3xl underline pt-2  md:text-6xl tracking-tight font-light uppercase">
            We live to code
          </div>
          <hr className="my-8 mx-2 md:mx-0 md:my-20" />
          <p className="text-4xl md:text-6xl tracking-tight font-semibold ml-4">팀 소개</p>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl  shadow-lg border border-gray-200 mt-2 md:mt-6">
            <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
              Team Members
            </p>
            <p className="text-center mb-5 text-xl font-normal text-gray-500 dark:text-gray-300">
              Members of Team int
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.keys(members).map((memberkey) => {
                const member = members[memberkey]
                return (
                  <div key={memberkey}>
                    <MemberCard
                      url={member.url}
                      name={member.name}
                      profile={member.profile}
                      desc={member.desc}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
