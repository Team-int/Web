import React from 'react'
import { NextPage } from 'next'
import SEO from 'components/seo'

const Core: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="px-12 lg:px-56">
        <div className="text-4xl font-bold pt-16 px-2 pb-8">
          코어봇을
          <br />
          소개합니다.
        </div>
        <div className="grid grid-rows-1 grid-flow-col justify-items-stretch">
          <div className="p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black grid">
            <div className="mr-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 justify-self-center">
              Lorem Ipsum<br /> is simply dummy<br /> text of the printing and <br />typesetting industry.
            </div>
          </div>
          <div className="p-10 m-2 row-auto rounded-2xl border-0 bg-card dark:bg-black grid">
            <div className="mr-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-blue-400 to-blue-500 justify-self-center">
              Lorem Ipsum<br /> is simply dummy<br /> text of the printing and <br />typesetting industry.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Core
