import { NextPage } from 'next/types'
const Custom404: NextPage = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img alt="bg" src="/static/images/404.svg" className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-10 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            길을 잃었나봐요..
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">404</p>
        </div>
      </div>
    </div>
  )
}
export default Custom404
