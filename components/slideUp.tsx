import { Transition } from '@headlessui/react'
interface Props {
  show?: boolean
  children: React.ReactNode
}
export default function SlideUp(props: Props): JSX.Element {
  const { show, children } = props
  return (
    <Transition
      show={show}
      enter="transform transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-12"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-out duration-300"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-12"
    >
      {children}
    </Transition>
  )
}
