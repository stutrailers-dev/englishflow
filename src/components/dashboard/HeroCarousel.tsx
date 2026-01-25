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
        if (swipe < -10000) paginate(1)
        else if (swipe > 10000) paginate(-1)
        setIsAutoPlaying(true)
    }

    const handleDotClick = (index: number) => {
        setPage([index, index > currentIndex ? 1 : -1])
        setIsAutoPlaying(true)
    }

    const currentSlide = heroSlides[currentIndex]

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (d: number) => ({ zIndex: 0, x: d < 0 ? '100%' : '-100%', opacity: 0 })
    }

    return (
        <div
            className="relative w-full"
            style={{ height: '60vh' }}
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
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0"
                >
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center px-6 pb-4">
                {/* Title */}
                <h1
                    className="text-2xl font-serif text-white text-center mb-1"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                    {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-white/60 text-xs mb-4">
                    {currentSlide.category} . {currentSlide.duration}
                </p>

                {/* Buttons - EXACT mockup style */}
                <div className="flex items-center gap-3 mb-3">
                    <Link
                        to={currentSlide.ctaLink}
                        className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-full"
                    >
                        Start Learning
                    </Link>
                    <button className="w-10 h-10 bg-neutral-600 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* TINY dot indicators - matching mockup exactly */}
                <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className="transition-all"
                            style={{
                                width: i === currentIndex ? '16px' : '5px',
                                height: '5px',
                                borderRadius: '2.5px',
                                backgroundColor: i === currentIndex ? 'white' : 'rgba(255,255,255,0.3)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
