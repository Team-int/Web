import Head from 'next/head'
const SEO: React.FC = () => {
  return (
    <Head>
      <link rel="preload" href="/static/images/light.svg" />
      <link rel="preload" href="/static/images/mountain.svg" />
      <title>Team int</title>
      <meta name="description" content="Team Int 공식 웹사이트 - We live to code"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  )
}
export default SEO
