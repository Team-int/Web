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
  mireu: {
    name: 'mireu',
    profile: '/static/images/members/mireu.jpg',
    github: 'https://github.com/Mireu-Labcon',
    desc: 'Hosting Manager'
  },
  mswgen: {
    name: 'mswgen',
    profile: '/static/images/members/mswgen.webp',
    github: 'https://github.com/mswgen',
    desc: 'Full stack Developer'
  },
  studio: {
    name: 'studio',
    profile: '/static/images/members/studio.jpg',
    github: 'https://github.com/thisisstudio',
    desc: 'Bot Developer'
  },
  ttakku: {
    name: 'aki',
    profile: '/static/images/members/ttakku.png',
    github: 'https://github.com/AkiaCode',
    desc: 'Full stack Developer'
  },
  bainble: {
    name: 'bainble',
    profile: '/static/images/members/bainble.webp',
    github: 'https://github.com/Bainble0211',
    desc: 'Bot Developer'
  },
  simsimler: {
    name: 'simSimler',
    profile: '/static/images/members/simsimler.webp',
    github: 'https://github.com/simsimler',
    desc: 'Bot Developer'
  },
  comjun: {
    name: 'comjun',
    profile: '/static/images/members/comjun.webp',
    github: 'https://github.com/comjun04',
    desc: 'Forum Manager'
  },
  kkels: {
    name: 'kkels',
    profile: '/static/images/members/kkels.png',
    github: 'https://github.com/jwkim101201',
    desc: 'Backend Developer'
  },
  missile: {
    name: 'misile',
    profile: '/static/images/members/misile.png',
    github: 'https://github.com/MisileLab',
    desc: 'Bot Developer'
  },
  controld: {
    name: 'control D',
    profile: '/static/images/members/controld.jpg',
    github: 'https://github.com/copecone',
    desc: 'Bot Developer'
  },
  soulkirs: {
    name: 'soulkirs',
    profile: '/static/images/members/soulkirs.png',
    github: 'https://github.com/soulkirs-main',
    desc: 'Security Specialist'
  },
}

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="w-full transition-all relative z-0 hero flex sm:px-0 duration-200 ">
        <img
          alt=""
          className="hero-light absolute hero-image  w-full object-cover bg-cover bg-center"
          src="/static/images/light.svg"
        />
        <img
          alt=""
          className="hero-dark  absolute hero-image w-full object-cover bg-cover bg-center "
          src="/static/images/mountain.svg"
        />

        <div className="inset-0 w-full  absolute z-0 bg-black opacity-10 "></div>
        <div className="mx-2 px-4 hero-text z-10 ">
          <div className="text-5xl sm:text-6xl md:text-9xl font-bold text-white ">Team int</div>

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
      <div className="transtition-colors duration-200  mx-auto rounded-2xl transform -translate-y-12 bg-white dark:bg-primary">
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
                name="인트봇"
                image="/static/images/projects/intbot.webp"
                desc="다양한 재밌는 엔터테인먼트 기능들을 갖고 있는 디스코드 봇 입니다.
                도박, 대시보드, 음악, 게임 등 다양한 컨텐츠를 갖고 있습니다."
              />
              <ProjectCard
                url="https://lab.jcde.xyz/Team-int/Web"
                name="Web"
                image="/static/images/symbol.webp"
                desc="지금 보고 있는 웹사이트입니다."
              />
              <ProjectCard
                url="/core"
                name="Core"
                image="/static/images/projects/core.png"
                desc="진행 중인 프로젝트입니다."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
