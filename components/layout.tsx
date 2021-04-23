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
      <div className="z-10">
        <Header />
      </div>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
