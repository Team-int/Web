import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <>
      <nav className="px-6 py-4 md:py-6 bg-gray-800">
        <div className="max-w-8xl m-auto md:px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image alt="logo" src="/static/images/symbol.png" height={30} width={30} />
              <div className=" pl-2">
                <Link href="/">
                  <a className="flex items-center flex-shrink-0 mr-6 text-white">
                    <span className=" text-2xl font-semibold tracking-tight">Team int</span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="#about">소개</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href={'https://discord.gg/nKaM6RrN92'}>
                  <a target="_blank" rel="noreferrer">
                    커뮤니티
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/service">서비스</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/help">지원</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/tos">약관</Link>
              </div>
            </div>

            <div className="block items-baseline"></div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
