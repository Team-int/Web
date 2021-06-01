import React from 'react'
import { NextPage } from 'next'
import SEO from 'components/seo'
import Image from 'next/image'

const Core: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="px-12 lg:px-56">
        <div className="text-6xl font-bold pt-16 px-4 pb-8">
          코어봇을
          <br />
          소개합니다.
        </div>
        <div className="grid grid-rows-1 md:grid-flow-col sm:grid-cols-1 justify-items-stretch">
          <div className="flex flex-row p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black">
            <div className="hidden lg:inline mr-20 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500">
              웹 대시보드를 <br />
              더 빠르게. <br />
              그리고 <br />
              더 정확하게. <br />
              <br />
              Flask 기반 <br />
              대시보드로 <br />
              호환성과 <br />
              사용자에게 <br />
              완벽한 <br />
              디자인 제공
            </div>
            <div className="inline lg:hidden mr-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500">
              웹 대시보드 <br />
              더 빠르고 <br />
              더 정확하게. <br />
              이용자에게 최적화된 UI.
            </div>
            <div className="hidden lg:inline opacity-50 infinite_rotating_logo">
              <Image alt="settings" src="/static/images/core/settings.svg" height={350} width={350} />
            </div>
          </div>
          <div className="p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black grid">
            <div className="mr-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-blue-400 to-blue-500 justify-self-center">
              웹 대시보드 <br />
              더 빠르고 <br />
              더 정확하게. <br />
              이용자에게 최적화된 UI.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Core
