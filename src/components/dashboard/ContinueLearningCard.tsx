import { Link } from 'react-router-dom'
import { Headphones, MessageCircle, BookOpen, Target, Play } from 'lucide-react'

interface ContinueLearningCardProps {
    id: string
    type: 'shadowing' | 'conversation' | 'chunks' | 'vocabulary'
    title: string
    progress: number // 0-100
    link: string
}

const typeConfig = {
    shadowing: {
        icon: Headphones,
        gradient: 'from-purple-500 to-indigo-600',
        bgColor: 'bg-purple-900/40'
    },
    conversation: {
        icon: MessageCircle,
        gradient: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-blue-900/40'
    },
    chunks: {
        icon: BookOpen,
        gradient: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-900/40'
    },
    vocabulary: {
        icon: Target,
        gradient: 'from-amber-500 to-orange-600',
        bgColor: 'bg-amber-900/40'
    }
}

export default function ContinueLearningCard({
    type,
    title,
    progress,
    link
}: ContinueLearningCardProps) {
    const config = typeConfig[type]
    const Icon = config.icon

    return (
        <Link
            to={link}
            className="flex-shrink-0 w-[160px] group"
        >
            {/* Larger card - Apple TV style */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] shadow-xl">
                {/* Background gradient */}
                <div className={`absolute inset-0 ${config.bgColor}`} />

                {/* Large icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-7 h-7 text-white fill-white" />
                    </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <p className="text-white text-base font-semibold mb-2">
                        {title}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${config.gradient} rounded-full transition-all`}
                            style={{ width: `${Math.max(progress, 2)}%` }}
                        />
                    </div>
                    <p className="text-white/60 text-xs mt-1.5">{progress}% Complete</p>
                </div>
            </div>
        </Link>
    )
}
