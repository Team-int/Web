import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import SlideUp from '../components/slideUp'

const Home: React.FC = () => {
  const [show, setShow] = useState<Array<boolean>>([false, false])
  useEffect(() => {
    setTimeout(() => {
      setShow([true, false])
      setTimeout(() => {
        setShow([true, true])
      }, 0.5)
    }, 1)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-screen">
        <div
          className=" h-3/4 flex px-2 sm:px-0 text-white"
          style={{
            backgroundImage: `url(${'/images/mountain.jpg'})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="m-auto mt-36 max-w-2xl">
            <SlideUp show={show[0]}>
              <div className="text-center text-6xl  lg:text-6xl xl:text-8xl font-bold ">
                Team int
              </div>
            </SlideUp>
            <SlideUp show={show[1]}>
              <p className="text-xl md:text-2xl md:pt-2">We live to code.</p>
              {console.log(show)}
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
