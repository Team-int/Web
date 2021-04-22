import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <div
        className=" hero flex px-2 sm:px-0 text-white"
        style={{
          backgroundImage: `url(${'/static/images/mountain.webp'})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-2 hero-text">
          <div className="text-6xl md:text-8xl font-bold ">Team int</div>

          <p className="text-xl md:text-2xl md:pt-2 ml-5">We live to code.</p>

          <div className="mt-5">
            <a className="bg-gray-100 text-black tracking-tighter text-sm px-3 py-2 rounded-md shadow ml-5">
              더 알아보기
            </a>
          </div>
        </div>
      </div>

      <div className="p-2 mx-auto max-w-4xl pt-10">
        <p className="text-3xl md:text-6xl tracking-tight font-semibold">팀 인트 소개</p>
        <p className="ml-5 text-lg md:text-xl">청소년 개발팀 블라블라</p>
      </div>
    </>
  )
}
export default Home
