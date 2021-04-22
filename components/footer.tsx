import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-800 w-full pt-8 pb-4 font-light text-gray-600  dark:text-gray-200 px-4 tracking-wide">
      <hr />
      <div className=" pt-4 grid grid-cols-3 gap-4 grid-flow-row max-w-lg mx-auto text-sm text-center ">
        <a>
          <Link href="https://github.com/team-int">깃헙</Link>
        </a>
        <a>
          <Link href="https://discord.gg/nKaM6RrN92">디스코드</Link>
        </a>
        <a>
          <Link href="/tos">약관</Link>
        </a>
        <a>
          <Link href="/services">서비스</Link>
        </a>
      </div>
      <div className="pt-2 md:pt-4 font-light whitespace-pre-wrap text-xs md:text-sm mx-auto text-center text-gray-700 leading-relaxed">
        © {new Date().getFullYear()} <a href="https://github.com/JcdeA">JcdeA, Chul0721 </a>for Team
        Int, Built with
        <a href="https://nextjs.org"> Next.js </a>
        <div className="ml-4 dark:text-gray-200 font-light  whitespace-pre-wrap">
          View source on
          <a href="https://github.com/Team-Int/Team-web"> Github</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
