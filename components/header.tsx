import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

const DarkToggle: React.FC<{ darkTheme: boolean; toggleDarkMode: () => void }> = ({
  darkTheme,
  toggleDarkMode,
}) => {
  return (
    <label className="cursor-pointer flex items-center justify-between">
      <span className="w-10 mr-2 text-white">{darkTheme ? 'Dark' : 'Light'}</span>
      {darkTheme ? (
        <svg
          className="w-6 current-fill text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          className="w-6 current-fill text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <input
        className="w-0 h-0 hidden"
        type="checkbox"
        onChange={() => toggleDarkMode()}
        checked={darkTheme}
      />
    </label>
  )
}

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleDarkMode = (): void => {
    // Whenever the user explicitly chooses light mode
    if (darkTheme) {
      localStorage.theme = 'light'
      document.querySelector('html').classList.remove('dark')
      setDarkTheme(false)
    } else {
      localStorage.theme = 'dark'
      document.querySelector('html').classList.add('dark')
      setDarkTheme(true)
    }
  }
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.theme = 'dark'
      document.querySelector('html').classList.add('dark')
      setDarkTheme(true)
    }
  }, [])
  return (
    <>
      <nav className="px-3 md:px-6 py-3 md:py-6 bg-gray-800 z-20 relative w-full h-12 md:h-20">
        <div className="max-w-8xl m-auto md:px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image alt="logo" src="/static/images/symbol.webp" height={30} width={30} />
              <div className=" pl-2 ">
                <Link href="/">
                  <span className="text-xl md:text-2xl font-semibold tracking-tight flex items-center flex-shrink-0  md:mr-6 text-white">
                    Team int
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center  text-lg text-white mx-6">
                <Link href="/#about">소개</Link>
              </div>
              <div className="hidden md:flex items-center  text-lg text-white mx-6">
                <Link href={'https://discord.gg/nKaM6RrN92'}>커뮤니티</Link>
              </div>
              <div className="hidden md:flex items-center text-lg text-white mx-6">
                <Link href="/services">서비스</Link>
              </div>
              <div className="hidden md:flex items-center text-lg text-white mx-6">
                <Link href="/help">지원</Link>
              </div>
              <div className="hidden md:flex items-center text-lg text-white mx-6">
                <Link href="/tos">약관</Link>
              </div>
            </div>

            <div className="block items-baseline">
              <div className="flex flex-row">
                <DarkToggle darkTheme={darkTheme} toggleDarkMode={toggleDarkMode} />
                <GiHamburgerMenu
                  onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
                  className="text-white ml-2 sm:ml-4 h-6 w-6 block md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute z-10 w-full">
        <Transition
          show={showMenu}
          enter="transform transition ease-in-out duration-300 z-0"
          enterFrom=" -translate-y-20"
          enterTo="translate-y-0"
          leave="transform transition ease-in-out duration-300 z-0"
          leaveFrom=" translate-y-0"
          leaveTo=" -translate-y-20"
        >
          <div className="md:invisible md:h-0 ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700 shadow text-white hover:text-gray-800 dark:hover:text-white block  py-4 text-base font-medium">
              <Link href="/">Home</Link>
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default Header
