import { NextPage } from 'next/types'
import ChannelService from 'components/channel'

const help: NextPage = () => {
  ChannelService.boot({
    pluginKey: 'pluginKey',
    memberId: '유저ID',
    profile: {
      name: '유저Name',
      email: '유저Email',
      id: '유저ID',
    },
  })

  return <>아래 채널톡을 이용하시거나 디스코드 서버의 문의 채널을 이용하여 주세요!</>
}

export default help
