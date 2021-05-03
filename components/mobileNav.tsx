import Link from 'next/link'

const MobileMenuButton: React.FC<{
  url: string
  text: string
  setShowMenu: (a: boolean) => void
}> = ({ url, text, setShowMenu }) => {
  return (
    <div className="px-4 h-12 space-y-1 sm:px-3 bg-white text-black dark:text-white dark:bg-foreground  block  py-2 ">
      <Link href={url}>
        <button
          onClick={() => {
            setTimeout(() => setShowMenu(false), 0.5)
          }}
        >
          {text}
        </button>
      </Link>
    </div>
  )
}

const MobileNav: React.FC<{ setShowMenu: (a: boolean) => void; showMenu: boolean }> = ({
  setShowMenu,
  showMenu,
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-40 mobile-nav md:hidden shadow-2xl overflow-y-auto transition duration-200 ease-out transform translate-x-0 dark:bg-foreground bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
        showMenu ? 'shadow-2xl ease-out translate-x-0' : 'shadow-none ease-in translate-x-full'
      }`}
    >
      <div className="md:invisible pt-20 h-3/4  md:h-0 font-medium text-white hover:text-gray-300 dark:hover:text-white ">
        <MobileMenuButton url="/#about" text="소개" setShowMenu={setShowMenu} />
        <MobileMenuButton
          url="https://discord.com/invite/nKaM6RrN92"
          text="커뮤니티"
          setShowMenu={setShowMenu}
        />
        <MobileMenuButton url="/tos" text="서비스" setShowMenu={setShowMenu} />
        <MobileMenuButton url="/help" text="지원" setShowMenu={setShowMenu} />
        <MobileMenuButton url="/tos" text="약관" setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}
export default MobileNav
