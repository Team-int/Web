import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header: React.FC = () => {
  return (
    <>
      <nav className="px-6 py-4 md:py-6 bg-gray-800 z-10 relative w-full h-14 md:h-20">
        <div className="max-w-8xl m-auto md:px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image alt="logo" src="/static/images/symbol.png" height={30} width={30} />
              <div className=" pl-2">
                <Link href="/">
                  <a className="flex items-center flex-shrink-0 mr-6 text-white">
                    <span className="text-xl md:text-2xl font-semibold tracking-tight">
                      Team int
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/">소개</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href={'https://discord.gg/nKaM6RrN92'}>
                  <a target="_blank" rel="noreferrer">
                    커뮤니티
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/services">서비스</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/help">지원</Link>
              </div>
              <div className="hidden md:flex items-center space-x-3 text-lg text-white ml-14">
                <Link href="/tos">약관</Link>
              </div>
            </div>

            <div className="block items-baseline md:hidden">
              <GiHamburgerMenu className="text-white h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
