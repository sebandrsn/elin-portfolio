import { useMenu } from '@/contexts/menu-context'
import Link from 'next/link'

export default function Menu() {
  const { isOpen, toggleMenu } = useMenu()
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex flex-col h-12 w-12 justify-center items-center"
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'rotate-45 translate-y-3 ' : 'opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? '-rotate-45 -translate-y-3 ' : 'opacity-100'
          }`}
        />
      </button>
      <div
        className={`fixed top-12 right-0 h-full bg-white transition-transform duration-300 ${
          isOpen ? 'w-1/3 translate-x-0' : 'w-1/3 translate-x-full'
        }`}
      >
        <div className="flext flex-col space-y-2 m-2">
          <div>
            <Link href={'/'} onClick={toggleMenu}>
              home
            </Link>
          </div>
          <div>
            <Link href={'/photos'} onClick={toggleMenu}>
              photos
            </Link>
          </div>
          <div>
            <Link href={'/about'} onClick={toggleMenu}>
              about
            </Link>
          </div>
          <div>
            <Link href={'/contact'} onClick={toggleMenu}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
