import Head from 'next/head'

const Offline: React.FC = () => (
  <>
    <Head>
      <title>옴마야</title>
    </Head>
    <div className="container pt-20 mx-auto px-4 max-w-5xl">
      <p className="text-4xl">현재 네트워크와 연결되있지 않습니다.</p>
      <p>이미 캐시되지 않은 정보를 볼려면 네트워크에 연결해주세요.</p>
    </div>
  </>
)
export default Offline
