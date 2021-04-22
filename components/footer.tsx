const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <hr />
        <div className="text-center text-gray-600 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center whitespace-pre-wrap">
          © {new Date().getFullYear()} <a href="https://github.com/JcdeA">JcdeA </a>for Team Int,
          Built with
          <a href="https://nextjs.org"> Next.js </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 font-light flex items-center justify-center whitespace-pre-wrap">
          View source on
          <a href="https://gitlab.jcde.xyz/Team-Int/recruit"> Gitlab (Self-hosted) </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
