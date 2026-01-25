import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

interface HeroSlide {
    id: string
    image: string
    title: string
    category: string
    duration: string
    ctaLink: string
}

const heroSlides: HeroSlide[] = [
    {
        id: 'traveller',
        image: '/images/heroes/hero_airport.png',
        title: 'You Are The Traveller',
        category: 'Speaking',
        duration: '10 Minutes',
        ctaLink: '/conversation'
    },
    {
        id: 'best',
        image: '/images/heroes/hero_cafe.png',
        title: 'The Best You Can',
        category: 'Shadowing',
        duration: '7 Minutes',
        ctaLink: '/practice'
    },
    {
        id: 'meet',
        image: '/images/heroes/hero_business.png',
        title: 'Meet Someone',
        category: 'Daily Conversation',
        duration: '5 Minutes',
        ctaLink: '/conversation'
    },
    {
        id: 'culture',
        image: '/images/heroes/hero_london.png',
        title: 'Discover London',
        category: 'British Culture',
        duration: '8 Minutes',
        ctaLink: '/chunks'
    }
]

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

export default function HeroCarousel() {
    const [[currentIndex, direction], setPage] = useState([0, 0])
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const paginate = useCallback((newDirection: number) => {
        const newIndex = currentIndex + newDirection
        if (newIndex < 0) setPage([heroSlides.length - 1, newDirection])
        else if (newIndex >= heroSlides.length) setPage([0, newDirection])
        else setPage([newIndex, newDirection])
    }, [currentIndex])

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => paginate(1), 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, paginate])

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x)
        if (swipe < -swipeConfidenceThreshold) paginate(1)
        else if (swipe > swipeConfidenceThreshold) paginate(-1)
        setIsAutoPlaying(true)
    }

    const handleDotClick = (index: number) => {
        const diff = index - currentIndex
        setPage([index, diff > 0 ? 1 : -1])
        setIsAutoPlaying(true)
    }

    const currentSlide = heroSlides[currentIndex]

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0.5 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (d: number) => ({ zIndex: 0, x: d < 0 ? '100%' : '-100%', opacity: 0.5 })
    }

    return (
        <div
            className="relative w-full"
            style={{ height: '62vh' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-4 px-4">
                <motion.h1
                    key={`t-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-serif text-white text-center mb-1"
                    style={{ fontFamily: 'Georgia, serif' }}
                >
                    {currentSlide.title}
                </motion.h1>

                <motion.p
                    key={`s-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/60 text-xs mb-3"
                >
                    {currentSlide.category} . {currentSlide.duration}
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-2 mb-2">
                    <Link
                        to={currentSlide.ctaLink}
                        className="px-5 py-2 bg-white text-black font-semibold rounded-full text-sm"
                        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                    >
                        Start Learning
                    </Link>
                    <button
                        className="w-9 h-9 bg-neutral-600/80 rounded-full flex items-center justify-center"
                        style={{ backdropFilter: 'blur(8px)' }}
                    >
                        <Plus className="w-4 h-4 text-white" />
                    </button>
                </div>

                {/* Tiny dot indicators */}
                <div className="flex items-center gap-1">
                    {heroSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={`transition-all duration-200 rounded-full ${i === currentIndex ? 'w-4 h-1 bg-white' : 'w-1 h-1 bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
