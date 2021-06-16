import React from 'react'
import { NextPage } from 'next'
import SEO from 'components/seo'
import Image from 'next/image'

const Core: NextPage = () => {
  return (
    <>
<<<<<<< HEAD
      <SEO title={'CoreBot'} />
      <div className="px-4 lg:px-56 mx-auto  max-w-7xl">
        <div className="text-5xl md:text-7xl font-bold pt-16 px-2 pb-8">
=======
      <SEO />
      <div className="px-12 lg:px-56">
        <div className="text-6xl font-bold pt-16 px-4 pb-8">
>>>>>>> 6d38fe3210bee96f7ee7084564048d63d5941557
          코어봇을
          <br />
          소개합니다.
        </div>
<<<<<<< HEAD
        <div className="flex flex-wrap gap-2">
          <div className="p-10 w-full md:max-w-4xl row-auto rounded-2xl border-0 bg-card dark:bg-black grid">
            <p className="mr-20 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 justify-self-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="p-10  w-full md:max-w-4xl row-auto rounded-2xl border-0 bg-card dark:bg-black grid">
            <p className="mr-20 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br   from-green-400 via-blue-400 to-blue-500 justify-self-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
=======
        <div className="grid grid-rows-1 md:grid-flow-col sm:grid-cols-1 justify-items-stretch">
          <div className="flex flex-row p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black">
            <div className="hidden lg:inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500">
              웹 대시보드를 <br />
              더 빠르게. <br />
              그리고 <br />
              더 정확하게. <br />
              <br />
              Flask 기반 <br />
              대시보드로 호환성과 <br />
              사용자에게 <br />
              완벽한 디자인 제공.
            </div>
            <div className="inline lg:hidden text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500">
              웹 대시보드 <br />
              더 빠르고 <br />
              더 정확하게. <br />
              이용자에게 <br />
              최적화된 UI. <br />
              더 이상 <br />
              어려워서 검색하지 <br />
              않아도 됩니다.
            </div>
          </div>
          <div className="flex flex-row p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black">
            <div className="mr-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-blue-400 to-blue-500 justify-self-center">
              더 이상 <br />
              여러 개의 봇을 <br />
              번거롭게 <br />
              초대하지 마세요. <br />
              역할 지급부터 <br />
              국내 최초 웹 기반 <br />
              인증 기능까지.
            </div>
>>>>>>> 6d38fe3210bee96f7ee7084564048d63d5941557
          </div>
        </div>
      </div>
    </>
  )
}
export default Core
