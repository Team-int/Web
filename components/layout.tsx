import Header from './header'
import Footer from './footer'
import SEO from './seo'
type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <div className="z-10 text-black  transition-colors duration-200">
        <Header />
      </div>
      <main className="pt-14 md:pt-20 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-200">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
