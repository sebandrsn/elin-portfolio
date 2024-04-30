import { useState, useEffect } from 'react'

export interface UseMediaQueryResponse {
  isMobile: boolean
  loaded: boolean
}

export default function useMediaQuery(query: string): UseMediaQueryResponse {
  const [matches, setMatches] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query)
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      }

      media.addEventListener('change', listener)
      setMatches(media.matches)
      setLoaded(true)

      return () => media.removeEventListener('change', listener)
    }
  }, [query])

  return { isMobile: matches, loaded }
}
