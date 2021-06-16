import Head from 'next/head'
const SEO: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <link rel="preload" as="image" href="/static/images/light.svg" />
      <link rel="preload" as="image" href="/static/images/mountain.svg" />
      <title>{title ? `${title} - Team int` : 'Team int'}</title>
      <meta property="og:image" content="/static/images/preview.webp" />
      <meta name="description" content="Team Int 공식 웹사이트 - We live to code"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  )
}
export default SEO
