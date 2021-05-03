import Head from 'next/head'
const SEO: React.FC = () => {
  return (
    <Head>
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        rel="stylesheet"
        media="print"
        //@ts-ignore
        onLoad="this.media='all'"
      />
      <link rel="preload" as="image" href="/static/images/light.svg" />
      <link rel="preload" as="image" href="/static/images/mountain.svg" />
      <title>Team int</title>
      <meta name="description" content="Team Int 공식 웹사이트 - We live to code"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
  )
}
export default SEO
