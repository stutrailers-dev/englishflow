import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  Check,
  X,
  Volume2,
  HelpCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import { useSpeechSynthesis } from '@/hooks'
import { clsx } from 'clsx'

interface TenseData {
  id: string
  name: string
  turkishName: string
  turkishEquivalent: string
  structure: {
    affirmative: string
    negative: string
    question: string
  }
  signalWords: string[]
  examples: {
    english: string
    turkish: string
    context?: string
  }[]
  commonMistakes: {
    wrong: string
    correct: string
    explanation: string
  }[]
  position: 'past' | 'present' | 'future' | 'conditional'
}

const tenses: TenseData[] = [
  // ============ PAST TENSES ============
  {
    id: 'past-simple',
    name: 'Past Simple',
    turkishName: 'Geçmiş Zaman (-DI)',
    turkishEquivalent: '-DI eki (yaptım, gittim)',
    structure: {
      affirmative: 'Subject + V2 (past form)',
      negative: 'Subject + did not + V1',
      question: 'Did + Subject + V1?'
    },
    signalWords: ['yesterday', 'last week', 'in 2020', 'ago', 'when'],
    examples: [
      {
        english: 'I sent the quotation yesterday.',
        turkish: 'Dün teklifi gönderdim.',
        context: 'Completed action with specific time'
      },
      {
        english: 'We manufactured 50 trailers last month.',
        turkish: 'Geçen ay 50 treyler ürettik.',
        context: 'Completed quantity in past'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I sended the quotation.',
        correct: 'I sent the quotation.',
        explanation: "'Send' is irregular: send → sent → sent"
      }
    ],
    position: 'past'
  },
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    turkishName: 'Geçmişte Sürerlik (-IYORDU)',
    turkishEquivalent: '-IYORDU eki (yapıyordum, gidiyordum)',
    structure: {
      affirmative: 'Subject + was/were + V-ing',
      negative: 'Subject + was/were not + V-ing',
      question: 'Was/Were + Subject + V-ing?'
    },
    signalWords: ['while', 'when', 'as', 'at that moment', 'all day yesterday'],
    examples: [
      {
        english: 'I was preparing the report when the client called.',
        turkish: 'Müşteri aradığında raporu hazırlıyordum.',
        context: 'Interrupted action in progress'
      },
      {
        english: 'We were discussing the specifications all morning.',
        turkish: 'Bütün sabah teknik özellikleri tartışıyorduk.',
        context: 'Ongoing past action'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I was work when you called.',
        correct: 'I was working when you called.',
        explanation: "Past Continuous requires V-ing form after was/were"
      }
    ],
    position: 'past'
  },
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    turkishName: 'Miş\'li Geçmiş (-MIŞtı)',
    turkishEquivalent: '-MIŞtı eki (yapmıştım, görmüştüm)',
    structure: {
      affirmative: 'Subject + had + V3',
      negative: 'Subject + had not + V3',
      question: 'Had + Subject + V3?'
    },
    signalWords: ['before', 'after', 'by the time', 'already', 'just', 'never...before'],
    examples: [
      {
        english: 'I had already sent the invoice before they asked.',
        turkish: 'Onlar sormadan faturayı çoktan göndermiştim.',
        context: 'Action completed before another past action'
      },
      {
        english: 'We had never exported to the UK before 2020.',
        turkish: '2020\'den önce hiç İngiltere\'ye ihracat yapmamıştık.',
        context: 'Experience before a past point'
      }
    ],
    commonMistakes: [
      {
        wrong: 'After I had ate lunch, I went to the meeting.',
        correct: 'After I had eaten lunch, I went to the meeting.',
        explanation: "'Eat' is irregular: eat → ate → eaten. Use V3 (past participle) after 'had'"
      }
    ],
    position: 'past'
  },
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Continuous',
    turkishName: 'Süregelen Miş\'li Geçmiş',
    turkishEquivalent: '-IYORDUM + süre vurgusu (2 saattir bekliyordum)',
    structure: {
      affirmative: 'Subject + had been + V-ing',
      negative: 'Subject + had not been + V-ing',
      question: 'Had + Subject + been + V-ing?'
    },
    signalWords: ['for', 'since', 'how long', 'before', 'all day'],
    examples: [
      {
        english: 'We had been waiting for two hours when the shipment arrived.',
        turkish: 'Sevkiyat geldiğinde iki saattir bekliyorduk.',
        context: 'Duration of action before past event'
      },
      {
        english: 'I had been working on the design for weeks before I showed it.',
        turkish: 'Göstermeden önce haftalardır tasarım üzerinde çalışıyordum.',
        context: 'Emphasizing duration'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I had been wait for an hour.',
        correct: 'I had been waiting for an hour.',
        explanation: "Use V-ing form after 'had been'"
      }
    ],
    position: 'past'
  },

  // ============ PRESENT TENSES ============
  {
    id: 'present-simple',
    name: 'Present Simple',
    turkishName: 'Geniş Zaman (-IR/-AR)',
    turkishEquivalent: '-IR/-AR eki (yaparım, giderim)',
    structure: {
      affirmative: 'Subject + V1 (he/she/it + V1-s)',
      negative: 'Subject + do/does not + V1',
      question: 'Do/Does + Subject + V1?'
    },
    signalWords: ['always', 'usually', 'often', 'sometimes', 'never', 'every day'],
    examples: [
      {
        english: 'We manufacture concrete mixer semi-trailers.',
        turkish: 'Beton mikseri yarı römork üretiyoruz.',
        context: 'General fact about business'
      },
      {
        english: 'The factory operates 24 hours a day.',
        turkish: 'Fabrika günde 24 saat çalışır.',
        context: 'Permanent situation'
      }
    ],
    commonMistakes: [
      {
        wrong: 'He work in the export department.',
        correct: 'He works in the export department.',
        explanation: "Add -s to the verb for he/she/it in Present Simple"
      }
    ],
    position: 'present'
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    turkishName: 'Şimdiki Zaman (-IYOR)',
    turkishEquivalent: '-IYOR eki (yapıyorum, gidiyorum)',
    structure: {
      affirmative: 'Subject + am/is/are + V-ing',
      negative: 'Subject + am/is/are not + V-ing',
      question: 'Am/Is/Are + Subject + V-ing?'
    },
    signalWords: ['now', 'at the moment', 'currently', 'right now', 'today'],
    examples: [
      {
        english: "I'm preparing the technical documents.",
        turkish: 'Teknik dokümanları hazırlıyorum.',
        context: 'Action happening now'
      },
      {
        english: "We're currently working on a new design.",
        turkish: 'Şu an yeni bir tasarım üzerinde çalışıyoruz.',
        context: 'Ongoing project'
      }
    ],
    commonMistakes: [
      {
        wrong: "I'm knowing the answer.",
        correct: 'I know the answer.',
        explanation: "Stative verbs (know, believe, want, need) typically don't use continuous form"
      }
    ],
    position: 'present'
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    turkishName: 'Yakın Geçmiş (-MIŞ)',
    turkishEquivalent: '-MIŞ eki (yapmışım) + Belirsiz zaman',
    structure: {
      affirmative: 'Subject + have/has + V3',
      negative: 'Subject + have/has not + V3',
      question: 'Have/Has + Subject + V3?'
    },
    signalWords: ['already', 'just', 'yet', 'ever', 'never', 'recently', 'so far'],
    examples: [
      {
        english: "I've already sent the quotation.",
        turkish: 'Teklifi zaten gönderdim.',
        context: 'Completed with present relevance'
      },
      {
        english: 'We have exported to 15 countries so far.',
        turkish: 'Şimdiye kadar 15 ülkeye ihracat yaptık.',
        context: 'Experience up to now'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I have sent it yesterday.',
        correct: 'I sent it yesterday.',
        explanation: "Don't use Present Perfect with specific past times (yesterday, last week)"
      }
    ],
    position: 'present'
  },
  {
    id: 'present-perfect-continuous',
    name: 'Present Perfect Continuous',
    turkishName: 'Süregelen Yakın Geçmiş',
    turkishEquivalent: '-IYOR + süre vurgusu (2 saattir çalışıyorum)',
    structure: {
      affirmative: 'Subject + have/has been + V-ing',
      negative: 'Subject + have/has not been + V-ing',
      question: 'Have/Has + Subject + been + V-ing?'
    },
    signalWords: ['for', 'since', 'how long', 'all morning', 'lately', 'recently'],
    examples: [
      {
        english: 'I have been working on this project for three months.',
        turkish: 'Üç aydır bu proje üzerinde çalışıyorum.',
        context: 'Duration up to now'
      },
      {
        english: 'We have been negotiating with them since January.',
        turkish: "Ocak'tan beri onlarla görüşüyoruz.",
        context: 'Ongoing negotiation'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I have been work here for 5 years.',
        correct: 'I have been working here for 5 years.',
        explanation: "Use V-ing form after 'have been'"
      }
    ],
    position: 'present'
  },

  // ============ FUTURE TENSES ============
  {
    id: 'future-simple',
    name: 'Future Simple (will)',
    turkishName: 'Gelecek Zaman (will)',
    turkishEquivalent: '-ECEK eki (yapacağım, gideceğim)',
    structure: {
      affirmative: 'Subject + will + V1',
      negative: "Subject + will not (won't) + V1",
      question: 'Will + Subject + V1?'
    },
    signalWords: ['tomorrow', 'next week', 'in the future', 'soon', 'I think', 'probably'],
    examples: [
      {
        english: "We'll ship the order next week.",
        turkish: 'Gelecek hafta siparişi göndereceğiz.',
        context: 'Future plan/prediction'
      },
      {
        english: "I'll get back to you with the details.",
        turkish: 'Detaylarla size döneceğim.',
        context: 'Promise/commitment'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I will to send it tomorrow.',
        correct: 'I will send it tomorrow.',
        explanation: "Don't use 'to' after 'will'"
      }
    ],
    position: 'future'
  },
  {
    id: 'going-to-future',
    name: 'Future (going to)',
    turkishName: 'Planlı Gelecek (going to)',
    turkishEquivalent: '-ECEK + plan/niyet (yapacağım - planladım)',
    structure: {
      affirmative: 'Subject + am/is/are + going to + V1',
      negative: 'Subject + am/is/are not + going to + V1',
      question: 'Am/Is/Are + Subject + going to + V1?'
    },
    signalWords: ['tomorrow', 'next month', 'soon', 'planning to', 'intend to'],
    examples: [
      {
        english: "We're going to expand our production line next year.",
        turkish: 'Gelecek yıl üretim hattımızı genişleteceğiz.',
        context: 'Planned intention'
      },
      {
        english: 'Look at those clouds! It is going to rain.',
        turkish: 'Şu bulutlara bak! Yağmur yağacak.',
        context: 'Prediction based on evidence'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I am going to will call you.',
        correct: 'I am going to call you.',
        explanation: "Don't use 'will' with 'going to'"
      }
    ],
    position: 'future'
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    turkishName: 'Gelecekte Sürerlik',
    turkishEquivalent: '-IYOR olacak (yapıyor olacağım)',
    structure: {
      affirmative: 'Subject + will be + V-ing',
      negative: "Subject + won't be + V-ing",
      question: 'Will + Subject + be + V-ing?'
    },
    signalWords: ['this time tomorrow', 'at 3 PM', 'next week', 'while'],
    examples: [
      {
        english: 'This time tomorrow, I will be presenting to the board.',
        turkish: 'Yarın bu saatte yönetim kuruluna sunum yapıyor olacağım.',
        context: 'Action in progress at future time'
      },
      {
        english: 'We will be manufacturing the new model in June.',
        turkish: "Haziran'da yeni modeli üretiyor olacağız.",
        context: 'Ongoing future action'
      }
    ],
    commonMistakes: [
      {
        wrong: 'I will be work at 9 AM.',
        correct: 'I will be working at 9 AM.',
        explanation: "Use V-ing form after 'will be'"
      }
    ],
    position: 'future'
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    turkishName: 'Gelecekte Tamamlanmış',
    turkishEquivalent: '-MIŞ olacak (yapmış olacağım)',
    structure: {
      affirmative: 'Subject + will have + V3',
      negative: "Subject + won't have + V3",
      question: 'Will + Subject + have + V3?'
    },
    signalWords: ['by tomorrow', 'by next week', 'by the time', 'before', 'by then'],
    examples: [
      {
        english: 'By Friday, we will have completed the order.',
        turkish: 'Cuma\'ya kadar siparişi tamamlamış olacağız.',
        context: 'Action completed before future point'
      },
      {
        english: 'I will have sent the documents before the meeting.',
        turkish: 'Toplantıdan önce belgeleri göndermiş olacağım.',
        context: 'Future completion before deadline'
      }
    ],
    commonMistakes: [
      {
        wrong: 'By next month, I will have went there.',
        correct: 'By next month, I will have gone there.',
        explanation: "'Go' is irregular: go → went → gone. Use V3 after 'will have'"
      }
    ],
    position: 'future'
  },
  {
    id: 'future-perfect-continuous',
    name: 'Future Perfect Continuous',
    turkishName: 'Gelecekte Süregelmiş',
    turkishEquivalent: '-IYOR olacak + süre (5 yıldır çalışıyor olacağım)',
    structure: {
      affirmative: 'Subject + will have been + V-ing',
      negative: "Subject + won't have been + V-ing",
      question: 'Will + Subject + have been + V-ing?'
    },
    signalWords: ['by', 'for', 'by the time', 'how long', 'by next year'],
    examples: [
      {
        english: 'By December, I will have been working here for 10 years.',
        turkish: "Aralık'ta burada 10 yıldır çalışıyor olacağım.",
        context: 'Duration up to future point'
      },
      {
        english: 'By the time you arrive, we will have been waiting for two hours.',
        turkish: 'Sen geldiğinde iki saattir bekliyor olacağız.',
        context: 'Emphasizing duration'
      }
    ],
    commonMistakes: [
      {
        wrong: 'By 2025, I will have been work here for 5 years.',
        correct: 'By 2025, I will have been working here for 5 years.',
        explanation: "Use V-ing form after 'will have been'"
      }
    ],
    position: 'future'
  },

  // ============ CONDITIONAL TENSES ============
  {
    id: 'zero-conditional',
    name: 'Zero Conditional',
    turkishName: 'Sıfırıncı Koşul',
    turkishEquivalent: 'Genel gerçekler ve bilimsel olgular (-IR/-SA)',
    structure: {
      affirmative: 'If + present simple, present simple',
      negative: 'If + present simple, do/does not + V1',
      question: 'If + present simple, do/does + subject + V1?'
    },
    signalWords: ['if', 'when', 'whenever', 'always', 'every time'],
    examples: [
      {
        english: 'If you heat water to 100°C, it boils.',
        turkish: 'Suyu 100°C\'ye ısıtırsanız, kaynar.',
        context: 'Scientific fact'
      },
      {
        english: 'If the delivery is late, customers complain.',
        turkish: 'Teslimat gecikirse, müşteriler şikayet eder.',
        context: 'General truth in business'
      }
    ],
    commonMistakes: [
      {
        wrong: 'If you will heat water, it boils.',
        correct: 'If you heat water, it boils.',
        explanation: "Don't use 'will' in the if-clause of Zero Conditional"
      }
    ],
    position: 'conditional'
  },
  {
    id: 'first-conditional',
    name: 'First Conditional',
    turkishName: 'Birinci Koşul',
    turkishEquivalent: 'Gelecekteki olası durumlar (-ECEK/-SA)',
    structure: {
      affirmative: 'If + present simple, will + V1',
      negative: "If + present simple, won't + V1",
      question: 'If + present simple, will + subject + V1?'
    },
    signalWords: ['if', 'unless', 'as soon as', 'when', 'provided that'],
    examples: [
      {
        english: 'If we receive the order today, we will ship it tomorrow.',
        turkish: 'Bugün siparişi alırsak, yarın göndereceğiz.',
        context: 'Likely future situation'
      },
      {
        english: "If you don't send the documents, we won't process the order.",
        turkish: 'Belgeleri göndermezseniz, siparişi işleme koymayacağız.',
        context: 'Negative consequence'
      }
    ],
    commonMistakes: [
      {
        wrong: 'If we will receive the order, we will ship it.',
        correct: 'If we receive the order, we will ship it.',
        explanation: "Use present simple (not 'will') in the if-clause"
      }
    ],
    position: 'conditional'
  },
  {
    id: 'second-conditional',
    name: 'Second Conditional',
    turkishName: 'İkinci Koşul',
    turkishEquivalent: 'Şu andaki hayal/imkansız durumlar (-EYDI/-SA)',
    structure: {
      affirmative: 'If + past simple, would + V1',
      negative: "If + past simple, wouldn't + V1",
      question: 'If + past simple, would + subject + V1?'
    },
    signalWords: ['if', 'if I were you', 'imagine', 'suppose'],
    examples: [
      {
        english: 'If we had a bigger factory, we would produce more trailers.',
        turkish: 'Daha büyük bir fabrikamız olsaydı, daha fazla römork üretirdik.',
        context: 'Hypothetical present situation'
      },
      {
        english: 'If I were you, I would negotiate the price.',
        turkish: 'Yerinde olsaydım, fiyatı pazarlık ederdim.',
        context: 'Giving advice'
      }
    ],
    commonMistakes: [
      {
        wrong: 'If I would have time, I would call you.',
        correct: 'If I had time, I would call you.',
        explanation: "Don't use 'would' in the if-clause of Second Conditional"
      }
    ],
    position: 'conditional'
  },
  {
    id: 'third-conditional',
    name: 'Third Conditional',
    turkishName: 'Üçüncü Koşul',
    turkishEquivalent: 'Geçmişteki imkansız durumlar (-EYDI/-SAYDI)',
    structure: {
      affirmative: 'If + past perfect, would have + V3',
      negative: "If + past perfect, wouldn't have + V3",
      question: 'If + past perfect, would + subject + have + V3?'
    },
    signalWords: ['if', 'if only', 'wish'],
    examples: [
      {
        english: 'If we had received the order earlier, we would have delivered on time.',
        turkish: 'Siparişi daha erken almış olsaydık, zamanında teslim ederdik.',
        context: 'Regret about past'
      },
      {
        english: "If I had known about the meeting, I wouldn't have missed it.",
        turkish: 'Toplantıdan haberdar olsaydım, kaçırmazdım.',
        context: 'Imagining different past'
      }
    ],
    commonMistakes: [
      {
        wrong: 'If we would have known, we would have acted.',
        correct: 'If we had known, we would have acted.',
        explanation: "Use past perfect (not 'would have') in the if-clause"
      }
    ],
    position: 'conditional'
  },
  {
    id: 'mixed-conditional',
    name: 'Mixed Conditional',
    turkishName: 'Karışık Koşul',
    turkishEquivalent: 'Geçmiş durum → Şimdiki sonuç',
    structure: {
      affirmative: 'If + past perfect, would + V1',
      negative: "If + past perfect, wouldn't + V1",
      question: 'If + past perfect, would + subject + V1?'
    },
    signalWords: ['if', 'now', 'at the moment', 'currently'],
    examples: [
      {
        english: 'If we had signed the contract last year, we would be their supplier now.',
        turkish: 'Geçen yıl kontratı imzalamış olsaydık, şimdi onların tedarikçisi olurduk.',
        context: 'Past action affecting present'
      },
      {
        english: "If I had studied engineering, I would understand these specifications now.",
        turkish: 'Mühendislik okusaydım, şimdi bu teknik özellikleri anlardım.',
        context: 'Past decision affecting present'
      }
    ],
    commonMistakes: [
      {
        wrong: 'If we had signed the contract, we would have been their supplier now.',
        correct: 'If we had signed the contract, we would be their supplier now.',
        explanation: "Use 'would + V1' (not 'would have + V3') for present result"
      }
    ],
    position: 'conditional'
  }
]

interface TenseTrainerProps {
  embedded?: boolean
}

export default function TenseTrainer({ embedded = false }: TenseTrainerProps) {
  const [selectedTense, setSelectedTense] = useState<TenseData | null>(null)
  const [activeTab, setActiveTab] = useState<'structure' | 'examples' | 'mistakes'>('structure')
  const detailCardRef = useRef<HTMLDivElement>(null)

  const { speak, isSpeaking } = useSpeechSynthesis()

  const handleSpeak = (text: string) => {
    speak(text)
  }

  // Auto-scroll to detail card when tense is selected
  useEffect(() => {
    if (selectedTense && detailCardRef.current) {
      // Small delay to let the animation start
      setTimeout(() => {
        detailCardRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    }
  }, [selectedTense])

  const handleTenseSelect = (tense: TenseData) => {
    setSelectedTense(tense)
    setActiveTab('structure') // Reset to structure tab when selecting new tense
  }

  const timelineGroups = {
    past: tenses.filter(t => t.position === 'past'),
    present: tenses.filter(t => t.position === 'present'),
    future: tenses.filter(t => t.position === 'future'),
    conditional: tenses.filter(t => t.position === 'conditional'),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6 pb-2 md:pb-0"
    >
      {/* Header - only show if not embedded */}
      {!embedded && (
        <div>
          <h1 className="text-3xl font-display font-bold text-navy-900">Tense Trainer</h1>
          <p className="text-navy-600 mt-2">Zaman Eğitimi — Master English tenses</p>
        </div>
      )}

      {/* Timeline Header */}
      <div className="card p-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-navy-400 via-navy-600 to-racing-600 -translate-y-1/2 rounded-full" />

          {/* Timeline Markers */}
          <div className="relative flex justify-between items-center px-4">
            <div className="flex items-center gap-2 bg-white pr-3">
              <ArrowLeft className="w-5 h-5 text-navy-400" />
              <div>
                <p className="text-sm font-semibold text-navy-700">PAST</p>
                <p className="text-xs text-navy-400">Geçmiş</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-3">
              <div className="w-3 h-3 bg-navy-600 rounded-full ring-4 ring-white shadow-lg" />
              <div>
                <p className="text-sm font-semibold text-navy-700">NOW</p>
                <p className="text-xs text-navy-400">Şimdi</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white pl-3">
              <div>
                <p className="text-sm font-semibold text-navy-700">FUTURE</p>
                <p className="text-xs text-navy-400">Gelecek</p>
              </div>
              <ArrowRight className="w-5 h-5 text-racing-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tense Selection Grid */}
      <div className="card p-5">
        <h2 className="text-lg font-semibold text-navy-900 mb-4">Select a Tense / Zaman Seçin</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {/* Past Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-navy-200 h-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-navy-400 flex-shrink-0" />
              <h3 className="font-semibold text-navy-700 whitespace-nowrap leading-none">Past Tenses</h3>
            </div>
            {timelineGroups.past.map(tense => (
              <button
                key={tense.id}
                onClick={() => handleTenseSelect(tense)}
                className={clsx(
                  'block w-full p-3 rounded-xl text-left text-sm transition-all border',
                  selectedTense?.id === tense.id
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                    : 'bg-white text-navy-700 border-cream-200 hover:border-navy-300 hover:bg-cream-50'
                )}
              >
                <span className="font-medium">{tense.name}</span>
                <span className="block text-xs mt-0.5 opacity-70">{tense.turkishName}</span>
              </button>
            ))}
          </div>

          {/* Present Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-navy-200 h-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-navy-600 flex-shrink-0" />
              <h3 className="font-semibold text-navy-700 whitespace-nowrap leading-none">Present Tenses</h3>
            </div>
            {timelineGroups.present.map(tense => (
              <button
                key={tense.id}
                onClick={() => handleTenseSelect(tense)}
                className={clsx(
                  'block w-full p-3 rounded-xl text-left text-sm transition-all border',
                  selectedTense?.id === tense.id
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                    : 'bg-white text-navy-700 border-cream-200 hover:border-navy-300 hover:bg-cream-50'
                )}
              >
                <span className="font-medium">{tense.name}</span>
                <span className="block text-xs mt-0.5 opacity-70">{tense.turkishName}</span>
              </button>
            ))}
          </div>

          {/* Future Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-racing-200 h-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-racing-600 flex-shrink-0" />
              <h3 className="font-semibold text-navy-700 whitespace-nowrap leading-none">Future Tenses</h3>
            </div>
            {timelineGroups.future.map(tense => (
              <button
                key={tense.id}
                onClick={() => handleTenseSelect(tense)}
                className={clsx(
                  'block w-full p-3 rounded-xl text-left text-sm transition-all border',
                  selectedTense?.id === tense.id
                    ? 'bg-racing-700 text-white border-racing-700 shadow-md'
                    : 'bg-white text-navy-700 border-cream-200 hover:border-racing-300 hover:bg-cream-50'
                )}
              >
                <span className="font-medium">{tense.name}</span>
                <span className="block text-xs mt-0.5 opacity-70">{tense.turkishName}</span>
              </button>
            ))}
          </div>

          {/* Conditional Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-indigo-200 h-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-indigo-600 flex-shrink-0" />
              <h3 className="font-semibold text-navy-700 whitespace-nowrap leading-none">Conditionals</h3>
            </div>
            {timelineGroups.conditional.map(tense => (
              <button
                key={tense.id}
                onClick={() => handleTenseSelect(tense)}
                className={clsx(
                  'block w-full p-3 rounded-xl text-left text-sm transition-all border',
                  selectedTense?.id === tense.id
                    ? 'bg-indigo-700 text-white border-indigo-700 shadow-md'
                    : 'bg-white text-navy-700 border-cream-200 hover:border-indigo-300 hover:bg-cream-50'
                )}
              >
                <span className="font-medium">{tense.name}</span>
                <span className="block text-xs mt-0.5 opacity-70">{tense.turkishName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tense Detail Card */}
      <AnimatePresence mode="wait">
        {selectedTense && (
          <motion.div
            ref={detailCardRef}
            key={selectedTense.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="card-elevated overflow-hidden scroll-mt-4"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-display font-bold">{selectedTense.name}</h2>
                  <p className="text-navy-200 mt-1">{selectedTense.turkishName}</p>
                </div>
                <div className="badge bg-white/20 text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {selectedTense.position}
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm text-navy-200">Türkçe Karşılığı:</p>
                <p className="text-white font-medium">{selectedTense.turkishEquivalent}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-cream-200">
              {(['structure', 'examples', 'mistakes'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    'flex-1 py-4 text-sm font-medium transition-colors',
                    activeTab === tab
                      ? 'text-navy-900 border-b-2 border-navy-900'
                      : 'text-navy-500 hover:text-navy-700'
                  )}
                >
                  {tab === 'structure' && 'Structure'}
                  {tab === 'examples' && 'Examples'}
                  {tab === 'mistakes' && 'Common Mistakes'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'structure' && (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    {/* Affirmative */}
                    <div className="p-4 bg-racing-50 rounded-xl border border-racing-200">
                      <p className="text-xs font-medium text-racing-700 uppercase tracking-wide mb-2">
                        ✓ Affirmative (Olumlu)
                      </p>
                      <p className="font-mono text-navy-900">{selectedTense.structure.affirmative}</p>
                    </div>

                    {/* Negative */}
                    <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                      <p className="text-xs font-medium text-red-700 uppercase tracking-wide mb-2">
                        ✗ Negative (Olumsuz)
                      </p>
                      <p className="font-mono text-navy-900">{selectedTense.structure.negative}</p>
                    </div>

                    {/* Question */}
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <p className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-2">
                        ? Question (Soru)
                      </p>
                      <p className="font-mono text-navy-900">{selectedTense.structure.question}</p>
                    </div>
                  </div>

                  {/* Signal Words */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-navy-700 mb-3">Signal Words (İpucu Kelimeler):</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTense.signalWords.map(word => (
                        <span key={word} className="badge-navy">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'examples' && (
                <div className="space-y-4">
                  {selectedTense.examples.map((example, index) => (
                    <div key={index} className="p-4 bg-cream-50 rounded-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-lg text-navy-900 font-medium">
                            "{example.english}"
                          </p>
                          <p className="text-navy-600 mt-1">{example.turkish}</p>
                          {example.context && (
                            <p className="text-sm text-navy-400 mt-2 italic">
                              Context: {example.context}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleSpeak(example.english)}
                          className="btn-icon ml-4"
                        >
                          <Volume2 className={clsx('w-5 h-5', isSpeaking && 'text-racing-600')} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mistakes' && (
                <div className="space-y-4">
                  {selectedTense.commonMistakes.map((mistake, index) => (
                    <div key={index} className="p-4 border border-cream-200 rounded-xl">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <X className="w-4 h-4 text-red-500" />
                            <p className="text-xs font-medium text-red-700 uppercase">Wrong</p>
                          </div>
                          <p className="text-navy-900 line-through">{mistake.wrong}</p>
                        </div>
                        <div className="p-3 bg-racing-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Check className="w-4 h-4 text-racing-600" />
                            <p className="text-xs font-medium text-racing-700 uppercase">Correct</p>
                          </div>
                          <p className="text-navy-900 font-medium">{mistake.correct}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
                        <HelpCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                        <p className="text-sm text-amber-800">{mistake.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder if no tense selected */}
      {!selectedTense && (
        <div className="card p-12 text-center">
          <Clock className="w-16 h-16 text-navy-200 mx-auto mb-4" />
          <p className="text-navy-600 text-lg">Select a tense to see details</p>
          <p className="text-navy-400 text-sm mt-1">Detayları görmek için bir zaman seçin</p>
        </div>
      )}
    </motion.div>
  )
}
