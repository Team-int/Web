import React from 'react'
import MemberCard from 'components/membercard'
import { NextPage } from 'next'
import ProjectCard from 'components/projectcard'
import SEO from 'components/seo'
import members from 'components/data'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="w-full pt-48 pb-96 transition-all sm:px-0 duration-200 hero text-center">
        <div className="text-5xl md:text-9xl font-semibold text-black font-mono dark:text-white">
          Team int
        </div>

        <p className="text-xl md:text-3xl  md:pt-1  sm:ml-5 text-black font-mono dark:text-white">
          We live to code.
        </p>

        <div className="mt-3 md:mt-8 ">
          <a
            href="/#about"
            className="bg-white text-gray-800 font-mono font-semibold text-sm md:text-lg py-2 px-2 md:py-3 md:px-4 text-medium rounded-lg shadow sm:ml-5"
          >
            About
          </a>
        </div>
      </div>

      <div className="transtition-colors relative duration-200 z-20  mx-auto rounded-2xl bg-white dark:bg-primary">
        <div className="p-4  mx-auto max-w-5xl   text-center pt-12">
          <span className="  font-mono  text-3xl underline pt-2  md:text-6xl tracking-tight font-light uppercase">
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
            <div className="flex flex-wrap gap-4 pt-5 mx-auto items-center justify-center">
              <ProjectCard
                url="https://github.com/Team-int/intbot"
                name="인트봇"
                image="/static/images/projects/intbot.png"
                desc={
                  <p>
                    다양한 기능이 있는 엔터테인먼트 <br />
                    <span className="font-medium">디스코드 봇</span>입니다.
                    <br /> 음악, 게임 등 다양한 컨텐츠를 갖고 있습니다.
                  </p>
                }
              />
              <ProjectCard
                url="https://github.com/Team-int/nammu-bot"
                name="나무봇"
                image="/static/images/symbol.webp"
                desc={
                  <p>
                    임베드,
                    <span className="font-medium"> 쉽고 간편하고 빠르게 </span>
                    작성하세요.
                  </p>
                }
              />
              <ProjectCard
                url="/core"
                name="코어봇"
                image="/static/images/projects/core.png"
                desc={
                  <p>
                    봇 한 개만으로도 서버 초기 설정부터 서버 관리까지 전부 커버가 가능하도록 설계된{' '}
                    <br />
                    개발중인 디스코드 봇, 코어봇입니다.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
