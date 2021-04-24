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
      <div className="z-10 dark:bg-gra transition-colors duration-200">
        <Header />
      </div>

      <main className=" dark:bg-gray-900 transition-colors duration-200">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
