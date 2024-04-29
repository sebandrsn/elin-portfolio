'use client'

import Link from 'next/link'
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <header className="bg-sky-500 py-4">
      <div className="flex flex-row justify-between items-center mx-4">
        <a
          href="https://www.instagram.com/elinsfotogalleri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/logo-instagram.svg"
            width={30}
            height={200}
            alt="Visit our Instagram page"
          />
        </a>
        {!isMobile && (
          <div className="space-x-4">
            <Link href={'/'} className="hover:text-yellow-700">
              home
            </Link>
            <Link href={'/photos'} className="hover:text-yellow-700">
              photos
            </Link>
            <Link href={'/about'} className="hover:text-yellow-700">
              about me
            </Link>
            <Link href={'/contact'} className="hover:text-yellow-700">
              contact
            </Link>
          </div>
        )}
        {isMobile && (
          <>
            <h1>elin åsedahl</h1>
            <button>
              <Image
                src="/icons/menu-outline.svg"
                width={30}
                height={200}
                alt="Open menu"
              />
            </button>
          </>
        )}
      </div>
    </header>
  )
}
