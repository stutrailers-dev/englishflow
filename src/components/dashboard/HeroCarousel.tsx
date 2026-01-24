import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Info } from 'lucide-react'

interface HeroSlide {
    id: string
    image: string
    title: string
    subtitle: string
    category: string
    ctaText: string
    ctaLink: string
}

const heroSlides: HeroSlide[] = [
    {
        id: 'business',
        image: '/images/heroes/hero_business.png',
        title: 'Master Business English',
        subtitle: 'Professional communication for global success',
        category: 'Business • Communication',
        ctaText: 'Start Practice',
        ctaLink: '/conversation'
    },
    {
        id: 'airport',
        image: '/images/heroes/hero_airport.png',
        title: 'Travel with Confidence',
        subtitle: 'Navigate airports and hotels like a native',
        category: 'Travel • Essential',
        ctaText: 'Learn Phrases',
        ctaLink: '/chunks'
    },
    {
        id: 'london',
        image: '/images/heroes/hero_london.png',
        title: 'Discover British Culture',
        subtitle: 'Immerse yourself in authentic British English',
        category: 'Culture • Lifestyle',
        ctaText: 'Explore',
        ctaLink: '/practice'
    },
    {
        id: 'cafe',
        image: '/images/heroes/hero_cafe.png',
        title: 'Social Conversations',
        subtitle: 'Connect naturally in any social setting',
        category: 'Social • Casual',
        ctaText: 'Practice Now',
        ctaLink: '/conversation'
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
        // Resume auto-play after user interaction
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
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    }

    return (
        <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: '16/10' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Image with Animation */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
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

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Category Badge */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm text-white/70">{currentSlide.category}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">
                                {currentSlide.title}
                            </h2>

                            {/* Subtitle */}
                            <p className="text-white/80 text-sm md:text-base mb-4 max-w-md">
                                {currentSlide.subtitle}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-3">
                                <Link
                                    to={currentSlide.ctaLink}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                                >
                                    <Play className="w-4 h-4 fill-current" />
                                    {currentSlide.ctaText}
                                </Link>
                                <button className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                                    <Info className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
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
    )
}
