import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobileNav from './mobileNav'
const DarkToggle: FC<{ toggleDarkMode: () => void; darkTheme: boolean }> = ({
  toggleDarkMode,
  darkTheme,
}) => {
  return (
    <label className="cursor-pointer flex items-center justify-between">
      {darkTheme && <span className="w-10 mr-2 text-white">Dark</span>}
      {!darkTheme && <span className="w-10 mr-2 text-black ">Light</span>}

   
      <input
        className="w-0 h-0 hidden"
        type="checkbox"
        onChange={() => toggleDarkMode()}
        checked={darkTheme}
      />
    </label>
  )
}

const Header: FC = () => {
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
      <button
        onClick={() => setShowMenu(false)}
        className={`fixed inset-0 nav h-screen w-screen text-transparent  block bg-black opacity-50 md:hidden ${
          showMenu ? 'show z-30' : 'z-0'
        }`}
      >
        overlay {/*<- accessability  */}
      </button>
      <nav className=" font-mono shadow  transition-colors duration 200 fixed px-4 md:px-6 py-5 md:py-6 bg-white text-black dark:bg-primary z-50 w-full h-16 md:h-20">
        <div className="max-w-8xl m-auto md:px-2">
          <div className="flex justify-between items-center ">
            <div className="flex items-center ">
              <Image alt="logo" src="/static/images/symbol.webp" priority height={30} width={30} />
              <div className=" pl-2 ">
                <Link href="/">
                  <a href="/">
                    <span className="text-xl md:text-2xl font-semibold tracking-tight flex items-center flex-shrink-0  md:mr-6  text-black dark:text-white">
                      Team int
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:flex items-center  text-lg  text-black  dark:text-white mx-6">
                <Link href="/#about">소개</Link>
              </div>
              <div className="hidden md:flex items-center  text-lg  text-black  dark:text-white mx-6">
                <Link href={'https://discord.gg/nKaM6RrN92'}>커뮤니티</Link>
              </div>
              <div className="hidden md:flex items-center text-lg  text-black  dark:text-white mx-6">
                <Link href="/services">서비스</Link>
              </div>
              <div className="hidden md:flex items-center text-lg  text-black  dark:text-white mx-6">
                <Link href="/help">지원</Link>
              </div>
              <div className="hidden md:flex items-center text-lg  text-black  dark:text-white mx-6">
                <Link href="/tos">약관</Link>
              </div>
            </div>

              <div className="flex flex-row items-center">
                <DarkToggle darkTheme={darkTheme} toggleDarkMode={toggleDarkMode} />
                <GiHamburgerMenu
                  onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
                  className="text-black dark:text-white ml-2 sm:ml-4 h-6 w-6 block md:hidden"
                />
            </div>
          </div>
        </div>
      </nav>
      <MobileNav setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  )
}

export default Header
