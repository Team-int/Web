import React from 'react'
import MemberCard from 'components/membercard'
import { memberProps } from 'components/membercard'
import { NextPage } from 'next'
import ProjectCard from 'components/projectcard'
import SEO from 'components/seo'

const members: Record<string, memberProps> = {
  chul0721: {
    name: 'Chul0721',
    profile: '/static/images/members/chul0721.jpg',
    github: 'https://github.com/chul0721',
    desc: 'Team Leader',
  },
  JcdeA: {
    name: 'JcdeA',
    profile: '/static/images/members/io.webp',
    github: 'https://github.com/JcdeA',
    desc: 'Full stack developer',
  },
  sujang: {
    name: 'Sujang958',
    profile: '/static/images/members/sujang.jpg',
    github: 'https://github.com/sujang958',
    desc: 'Web Developer',
  },
  agg: {
    name: 'madeGOD',
    profile: '/static/images/members/agg.webp',
    github: 'https://github.com/madeGOD',
    desc: 'Bot developer',
  },
  mswgen: {
    name: 'mswgen',
    profile: '/static/images/members/mswgen.webp',
    github: 'https://github.com/mswgen',
    desc: 'Bot Developer',
  },
  studio: {
    name: 'nox',
    profile: '/static/images/members/studio.jpg',
    github: 'https://github.com/thisisstudio',
    desc: 'Bot Developer',
  },
  ttakku: {
    name: 'aki',
    profile: '/static/images/members/ttakku.jpeg',
    github: 'https://github.com/AkiaCode',
    desc: 'Full stack Developer',
  },
  bainble: {
    name: 'bainble',
    profile: '/static/images/members/bainble.webp',
    github: 'https://github.com/Bainble0211',
    desc: 'Bot Developer',
  },
  simsimler: {
    name: 'simSimler',
    profile: '/static/images/members/simsimler.webp',
    github: 'https://github.com/simsimler',
    desc: 'Bot Developer',
  },
  comjun: {
    name: 'comjun04',
    profile: '/static/images/members/comjun.webp',
    github: 'https://github.com/comjun04',
    desc: 'Forum Manager',
  },
  csh: {
    name: 'CSH',
    profile: '/static/images/members/csh.png',
    github: 'https://github.com/CSH3235',
    desc: 'Forum Manager',
  },
  kkels: {
    name: 'kkels',
    profile: '/static/images/members/kkels.png',
    github: 'https://github.com/jwkim101201',
    desc: 'Backend Developer',
  },
  lukekeum: {
    name: 'lukekeum',
    profile: '/static/images/members/jungbin.jpeg',
    github: 'https://github.com/lukekeum',
    desc: 'Full Stack Developer',
  },
  missile: {
    name: 'misile',
    profile: '/static/images/members/misile.png',
    github: 'https://github.com/MisileLab',
    desc: 'Bot Developer',
  },
  soulkirs: {
    name: 'soulkirs',
    profile: '/static/images/members/soulkirs.png',
    github: 'https://github.com/soulkirs-main',
    desc: 'Security Specialist',
  },
  issac: {
    name: 'issac',
    profile: '/static/images/members/shimshim.jpeg',
    github: 'https://github.com/issac4892',
    desc: 'Bot Developer',
  },
  lineking: {
    name: 'lineking',
    profile: '/static/images/members/lineking.png',
    github: 'https://github.com/LINEKING2100',
    desc: 'Designer',
  },
}

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="w-full transition-all  hero z-0 flex sm:px-0 duration-200 ">
        <div className="inset-0 w-full absolute z-10 bg-black opacity-10 "></div>
        <div className=" px-4 pt-6 md:pt-16 z-10" style={{ paddingLeft: '8vw' }}>
          <div className="text-5xl md:text-9xl font-semibold text-white ">Team int</div>

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
        <div className="p-4  mx-auto max-w-5xl   text-center pt-12">
          <span className="   text-3xl underline pt-2  md:text-6xl tracking-tight font-light uppercase">
            We live to code
          </span>
          <div id="about"></div>
          <hr className="my-8  mx-2 md:mx-0 md:my-16 border-gray-400 " />

          <p className="text-center text-4xl md:text-5xl pt-4 pb-1 font-medium text-gray-800 dark:text-white">
            팀 소개
          </p>
          <p className="text-center mb-5 text-xl font-normal text-gray-500 dark:text-gray-300">
            Members of Team int
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-0">
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
          <div className="rounded-xl p-4 pt-20 ">
            <p className="text-5xl pb-1 font-medium">프로젝트 소개</p>
            <div className="flex flex-wrap gap-4 pt-5">
              <ProjectCard
                url="https://github.com/Team-int/intbot"
                name="인트봇"
                image="/static/images/projects/intbot.webp"
                desc={
                  <p>
                    다양하고 재밌는 엔터테인먼트 <br /> 기능들을 갖고 있는{' '}
                    <span className="font-medium">디스코드 봇!</span>
                    <br /> 도박, 대시보드, 음악, 게임 등 다양한 컨텐츠를 갖고 있습니다.
                  </p>
                }
              />
              <ProjectCard
                url="https://github.com/Team-int/nammu-bot"
                name="나무 봇"
                image="/static/images/symbol.webp"
                desc={
                  <p>
                    임베드,
                    <span className="font-medium">쉽고 간편하고 빠르게</span>
                    작성하세요.
                  </p>
                }
              />
              <ProjectCard
                url="/core"
                name="Core"
                image="/static/images/projects/core.png"
                desc="개발중인 디스코드 봇입니다."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
