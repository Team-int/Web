import React from 'react'

const Tos: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl pt-10 px-3 transition-all duration-200 dark:text-white">
      <p className="md:ml-4 text-3xl md:text-6xl font-extrabold tracking-loose md:pb-6">
        서비스 이용약관
      </p>
      <TosItem
        title="제 1조 (목적)"
        textList={[
          '이 약관은 int에서 제공하는 서비스를 이용함에 있어 int와 이용자의 권리 및 의무를 규정함을 목적으로 합니다.',
        ]}
      />
      <TosItem
        title="제 2조 (정의)"
        textList={[
          '"이용자"란 서비스의 약관에 따라 "int"가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.',
          '"회원"이라 함은 int의 서비스에 회원등록을 한 자로서, 계속적으로 int가 제공하는 서비스를 이용할 수 있는 자를 말합니다.',
          '"비회원"이라 함은 회원에 가입하지 않고 int가 제공하는 서비스를 이용하는 자를 말합니다.',
          '"이용계약"이란 int가 제공하는 서비스에 관한 회원의 이용신청을 int가 승낙함으로써 성립하는 계약을 말합니다.',
        ]}
      />
      <TosItem
        title="제3조 (명시)"
        textList={[
          '"int"는 이 약관의 내용과 상호 및 전자우편주소 등을 이용자가 쉽게 알 수 있도록 "int"의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.',
          '"int"는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회.배송책임.환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.',
        ]}
      />
      <TosItem
        title="제4조(중단)"
        textList={[
          '"int"는 컴퓨터 등 정보통신설비의 보수점검 / 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.',
          '"int"는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 이 때 손해 배상의 내용은 int에서 결정할 수 있으며, 유료 서비스가 아닐 경우 배상이 이루어지지 않을 수 있습니다.',
        ]}
      />
    </div>
  )
}
export default Tos

const TosItem: React.FC<{ title: string; textList: Array<string> }> = ({ title, textList }) => {
  return (
    <div className="mx-2 py-3">
      <p className="font-bold text-2xl md:text-4xl dark:text-gray-100 text-gray-800 md:pb-1">
        {title}
      </p>

      <div className="text-gray-700 dark:text-gray-200 leading-loose">
        {textList.map((item) => {
          return (
            <div className="pt-1" key={textList.indexOf(item)}>
              <span className="font-medium text-md">{textList.indexOf(item) + 1}</span>. {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

{
  /*
이 정도면 된듯요
*/
}
