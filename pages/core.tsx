import React from 'react'
import { NextPage } from 'next'
import SEO from 'components/seo'
import Image from 'next/image'

const Core: NextPage = () => {
  return (
    <>
      <SEO title={'CoreBot'} />
      <div className="px-4 lg:px-56 mx-auto  max-w-7xl">
        <div className="text-5xl md:text-7xl font-bold pt-16 px-2 pb-8">
          코어봇을
          <br />
          소개합니다.
        </div>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default Core
