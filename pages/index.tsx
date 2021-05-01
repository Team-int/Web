import React from 'react'
import MemberCard from 'components/membercard'
import { memberProps } from 'components/membercard'
import { NextPage } from 'next'
import ProjectCard from 'components/projectcard'
const members: Record<string, memberProps> = {
  chul0721: {
    name: 'Chul0721',
    profile: '/static/images/members/chul.webp',
    url: 'https://github.com/chul0721',
    desc: 'Founder, Full stack developer',
  },
  JcdeA: {
    name: 'JcdeA',
    profile: '/static/images/members/io.webp',
    url: 'https://github.com/JcdeA',
    desc: 'Full stack developer, Designer, I use arch btw',
  },
  kms: {
    name: 'ALL PGS',
    profile: '/static/images/members/kms.webp',
    url: 'https://github.com/kms0219kms',
    desc: '안녕하세요. 학생 웹 퍼블리셔 All PGS입니다!',
  },
  sujang: {
    name: 'Sujang958',
    profile: '/static/images/members/sujang.webp',
    url: 'https://github.com/sujang958',
    desc: 'Bot list developer, Designer',
  },
  agg: {
    name: 'makeGOD',
    profile: '/static/images/members/agg.webp',
    url: 'https://github.com/makeGOD',
    desc: 'Intbot developer, MakeGOD.',
  },
}

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full transition-all relative z-0 hero flex sm:px-0 duration-200 hero-bg">
        <img
          alt=""
          className="hero-light absolute hero w-full bg-contain object-cover"
          src="/static/images/light.svg"
        />
        <img
          alt=""
          className="hero-dark bg-contain absolute hero w-full object-cover"
          src="/static/images/mountain.svg"
        />

        <div className="inset-0 mt-14 md:mt-20 w-full hero  absolute z-0  opacity-25"></div>
        <div className="mx-2 px-4 hero-text z-10 ">
          <div className="text-6xl md:text-9xl font-bold text-white ">Team int</div>

          <p className="text-xl md:text-3xl  md:pt-1  sm:ml-5 text-white">We live to code.</p>

          <div className="mt-3 md:mt-8 ">
            <a
              href="/#about"
              className="bg-white text-gray-800 font-semibold text-sm md:text-lg py-2 px-3 md:py-3 md:px-4 uppercase text-semibold rounded-lg shadow sm:ml-5"
            >
              about
            </a>
          </div>
        </div>
      </div>
      <div
        className="transtition-colors duration-200 dark:bg-primary   bg-white mx-auto rounded-2xl  "
        id="about"
      >
        <div className="p-4 mx-auto max-w-5xl pt-12   text-center ">
          <span className="   text-3xl underline pt-2  md:text-6xl tracking-tight font-light uppercase">
            We live to code
          </span>
          <hr className="my-8 mx-2 md:mx-0 md:my-20" />
          <p className="text-center text-4xl font-bold text-gray-800 dark:text-white">팀 소개</p>
          <div className=" transtition-colors duration-200 p-6 bg-white dark:bg-foreground rounded-xl  shadow-lg border border-gray-200 mt-2 md:mt-3">
            <p className="text-center mb-5 text-xl font-normal text-gray-500 dark:text-gray-300">
              Members of Team int
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4">
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
          <div className="rounded-xl p-4 pt-20">
            <p className="text-4xl font-semibold">프로젝트 소개</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gaps-4 pt-5">
              <ProjectCard
                url="example.com"
                name="intbot"
                image="/static/images/projects/intbot.webp"
                desc="helo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
