import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-800 w-full pt-8 pb-4 font-light text-gray-600  dark:text-gray-200 px-8 tracking-wide">
      <hr />
      <div className=" pt-4 grid grid-cols-3 gap-4 grid-flow-row max-w-lg mx-auto text-sm text-center pb-5">
        <Link href="https://github.com/team-int">깃허브</Link>

        <Link href="https://discord.gg/nKaM6RrN92">디스코드</Link>

        <Link href="/tos">약관</Link>
      </div>
      <div className="pt-2 md:pt-4 font-light whitespace-pre-wrap text-xs md:text-sm mx-auto text-center text-gray-700 leading-relaxed">
        © {new Date().getFullYear()} <a href="https://github.com/JcdeA">JcdeA, Chul0721 </a>for Team
        Int, Built with
        <a href="https://nextjs.org"> Next.js </a>
        <div className=" dark:text-gray-200 font-light  whitespace-pre-wrap">
          View source on
          <a href="https://github.com/Team-Int/Team-web"> Github</a>
        </div>
        <a className="text-xs" href="https://www.vecteezy.com/free-vector/nature">
          Nature Vectors by Vecteezy
        </a>
      </div>
    </footer>
  )
}
export default Footer
