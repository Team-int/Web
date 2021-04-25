import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { useState, useEffect } from 'react'
type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
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
      <SEO />
      <div className="z-10 text-black  transition-colors duration-200">
        <Header
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          darkTheme={darkTheme}
          toggleDarkMode={toggleDarkMode}
        />
      </div>

      <main className=" dark:bg-gray-900 transition-colors duration-200">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
