import React from 'react'
import MemberCard from 'components/membercard'
import { memberProps } from 'components/membercard'
import { NextPage } from 'next'
import ProjectCard from 'components/projectcard'
import SEO from 'components/seo'

const members: Record<string, memberProps> = {
  chul0721: {
    name: 'Chul0721',
    profile: '/static/images/members/chul.webp',
    github: 'https://github.com/chul0721',
    desc: 'Founder, Full stack developer',
  },
  JcdeA: {
    name: 'JcdeA',
    profile: '/static/images/members/io.webp',
    github: 'https://github.com/JcdeA',
    desc: 'Full stack developer, Designer, I use arch btw',
  },
  kms: {
    name: 'ALL PGS',
    profile: '/static/images/members/kms.webp',
    github: 'https://github.com/kms0219kms',
    desc: '안녕하세요. 학생 웹 퍼블리셔 All PGS입니다!',
  },
  sujang: {
    name: 'Sujang958',
    profile: '/static/images/members/sujang.webp',
    github: 'https://github.com/sujang958',
    desc: 'Bot list developer, Designer',
  },
  agg: {
    name: 'makeGOD',
    profile: '/static/images/members/agg.webp',
    github: 'https://github.com/makeGOD',
    desc: 'Intbot developer, MakeGOD.',
  },
}

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="w-full transition-all hero z-0 flex sm:px-0 duration-200 ">
        <img
          alt=""
          className="hero-light absolute w-full object-cover h-1/3 bg-cover bg-center"
          src="/static/images/light.svg"
        />
        <img
          alt=""
          className="hero-dark  absolute  w-full object-cover h-1/3  bg-cover bg-center "
          src="/static/images/mountain.svg"
        />

        <div className="inset-0 w-full absolute z-10 bg-black opacity-10 "></div>
        <div className=" px-4 pt-6 md:pt-16 z-10" style={{ paddingLeft: '8vw' }}>
          <div className="text-5xl md:text-9xl font-bold text-white ">Team int</div>

          <p className="text-xl md:text-3xl  md:pt-1  sm:ml-5 text-white">We live to code.</p>

          <div className="mt-3 md:mt-8 ">
            <a
              href="/#about"
              className="bg-white text-gray-800 font-semibold text-sm md:text-lg py-2 px-2 md:py-3 md:px-4 uppercase text-semibold rounded-lg shadow sm:ml-5"
            >
              about
            </a>
          </div>
        </div>
      </div>
      <div className="transtition-colors relative duration-200 z-20  mx-auto rounded-2xl bg-white dark:bg-primary">
        <div className="p-4 mx-auto max-w-5xl pt-12   text-center ">
          <span className="   text-3xl underline pt-2  md:text-6xl tracking-tight font-light uppercase">
            We live to code
          </span>
          <hr className="my-8 mx-2 md:mx-0 md:my-20 " id="about" />
          <p className="text-center text-4xl font-bold text-gray-800 dark:text-white">팀 소개</p>

          <p className="text-center mb-5 text-xl font-normal text-gray-500 dark:text-gray-300">
            Members of Team int
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 px-4 md:px-0">
            {Object.keys(members).map((memberkey) => {
              const member = members[memberkey]
              return (
                <div key={member.name}>
                  <MemberCard
                    github={member.github}
                    name={member.name}
                    profile={member.profile}
                    desc={member.desc}
                  />
                </div>
              )
            })}
          </div>

          <div className="rounded-xl p-4 pt-20">
            <p className="text-4xl font-semibold">프로젝트 소개</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gaps-4 pt-5">
              <ProjectCard
                url="https://github.com/Team-int/intbot"
                name="intbot"
                image="/static/images/projects/intbot.webp"
                desc="팀 int 에서 개발된 다양한 재밌는 엔터테인먼트 기능들을 갖고 있는 디스코드 봇 입니다.
                도박, 대시보드, 음악, 게임 등 다양한 컨텐츠를 갖고 있습니다."
              />
              <ProjectCard
                url="https://lab.jcde.xyz/Team-int/Web"
                name="Web"
                image="/static/images/projects/intbot.webp"
                desc="지금 보고 있는 웹사이트입니다!"
              />
              <ProjectCard
                url="/core"
                name="Core"
                image="/static/images/projects/core.png"
                desc="팀 int 에서 개발된 다양한 재밌는 엔터테인먼트 기능들을 갖고 있는 디스코드 봇 입니다.
                도박, 대시보드, 음악, 게임 등 다양한 컨텐츠를 갖고 있습니다."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
