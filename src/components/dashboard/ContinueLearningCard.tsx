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
        bgColor: 'bg-purple-500/20'
    },
    conversation: {
        icon: MessageCircle,
        gradient: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-blue-500/20'
    },
    chunks: {
        icon: BookOpen,
        gradient: 'from-emerald-500 to-teal-600',
        bgColor: 'bg-emerald-500/20'
    },
    vocabulary: {
        icon: Target,
        gradient: 'from-amber-500 to-orange-600',
        bgColor: 'bg-amber-500/20'
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
            className="flex-shrink-0 w-[140px] group"
        >
            <div className="relative aspect-[7/9] rounded-xl overflow-hidden bg-neutral-800/50 border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                {/* Icon Background */}
                <div className={`absolute inset-0 ${config.bgColor} flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium line-clamp-2 mb-2">
                        {title}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${config.gradient} rounded-full transition-all`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-white/60 text-xs mt-1">{progress}% Complete</p>
                </div>
            </div>
        </Link>
    )
}
