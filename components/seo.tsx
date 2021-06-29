import Head from 'next/head'
const SEO: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <link rel="preload" as="image" href="/static/images/light.svg" />
      <link rel="preload" as="image" href="/static/images/mountain.svg" />

      <link
        rel="preload stylesheet"
        href="https://rsms.me/inter/inter.css"
        as="style"
        crossOrigin=""
      />

      <link
        rel="preload stylesheet"
        href="https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/styles.min.css"
        as="style"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/fonts/NotoSans-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        as="font"
        href="https://rsms.me/inter/font-files/Inter-roman.var.woff2?v=3.19"
        type="font/woff2"
        crossOrigin=""
      />

      <title>{title ? `${title} - Team int` : 'Team int'}</title>
      <meta property="og:image" content="/static/images/preview.webp" />
      <meta name="description" content="Team Int 공식 웹사이트 - We live to code"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  )
}
export default SEO
