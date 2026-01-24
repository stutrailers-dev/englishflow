import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
    root?: Element | null
    rootMargin?: string
    threshold?: number | number[]
    enabled?: boolean
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
) {
    const { root = null, rootMargin = '0px', threshold = 0, enabled = true } = options
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!enabled) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { root, rootMargin, threshold }
        )

        const element = containerRef.current
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [root, rootMargin, threshold, enabled])

    return { containerRef, isVisible }
}
