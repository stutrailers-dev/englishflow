import { Link } from 'react-router-dom'

interface ContinueLearningCardProps {
    id: string
    image: string
    title: string
    link: string
}

export default function ContinueLearningCard({
    image,
    title,
    link
}: ContinueLearningCardProps) {
    return (
        <Link
            to={link}
            className="flex-shrink-0 w-[140px] group"
        >
            {/* Photo card - matching mockup */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                {/* Background image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium line-clamp-2">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}
