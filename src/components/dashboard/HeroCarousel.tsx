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
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

export default function HeroCarousel() {
    const [[currentIndex, direction], setPage] = useState([0, 0])
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const paginate = useCallback((newDirection: number) => {
        const newIndex = currentIndex + newDirection
        if (newIndex < 0) {
            setPage([heroSlides.length - 1, newDirection])
        } else if (newIndex >= heroSlides.length) {
            setPage([0, newDirection])
        } else {
            setPage([newIndex, newDirection])
        }
    }, [currentIndex])

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            paginate(1)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, paginate])

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x)

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
        }
        setIsAutoPlaying(true)
    }

    const handleDotClick = (index: number) => {
        const diff = index - currentIndex
        setPage([index, diff > 0 ? 1 : -1])
        setIsAutoPlaying(true)
    }

    const currentSlide = heroSlides[currentIndex]

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0.5
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0.5
        })
    }

    return (
        <div
            className="relative w-full"
            style={{ height: 'calc(100vh - 220px)' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Full screen hero image */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                    {/* Image */}
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />

                    {/* Gradient Overlay - stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content - Fixed position, centered */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-6 px-6">
                {/* Title - Serif font, centered */}
                <motion.h1
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-serif font-normal text-white text-center mb-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                >
                    {currentSlide.title}
                </motion.h1>

                {/* Category and Duration */}
                <motion.p
                    key={`subtitle-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/70 text-sm mb-6"
                >
                    {currentSlide.category} . {currentSlide.duration}
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3 mb-4">
                    <Link
                        to={currentSlide.ctaLink}
                        className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm"
                    >
                        Start Learning
                    </Link>
                    <button className="w-11 h-11 bg-neutral-700/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-neutral-600/80 transition-colors">
                        <Plus className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Dot Indicators - 7 dots, pill shape for active */}
                <div className="flex items-center gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-6 h-2 bg-white'
                                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
