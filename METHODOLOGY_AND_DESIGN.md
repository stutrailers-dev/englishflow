# EnglishFlow - Kişiselleştirilmiş İngilizce Geliştirme Sistemi

## 📋 Durum Analizi

### Mevcut Profil
- **Seviye:** B1 (Orta)
- **Anlama Kapasitesi:** ~%80
- **Konuşma Kapasitesi:** Zihninden geçenlerin <%50'si
- **Hedef Aksan:** British English (RP - Received Pronunciation)

### Kullanım Bağlamları
1. **Havalimanı & Seyahat** - Check-in, güvenlik, bagaj, yönlendirmeler
2. **Teknik Görüşmeler** - Semi-trailer terminolojisi, üretim süreçleri, kalite
3. **Sosyal Ortamlar** - Restoran, günlük sohbet, small talk

### Tespit Edilen Engeller
| Engel | Kök Neden | Çözüm Yaklaşımı |
|-------|-----------|-----------------|
| Mükemmeliyetçilik | Hata korkusu | Progressive Accuracy + Fluency First |
| Zaman yapıları karmaşası | L1 Transfer hatası | Chunking + Pattern Recognition |
| Zihinsel çeviri | Dual-processing yükü | Direct Association + Immersion |
| Dil körlüğü | Exposure eksikliği | Daily Micro-Immersion |
| Non-native anlama zorluğu | Accent variation | Multi-accent exposure |
| Kelime dağarcığı | Domain-specific gaps | Contextual Vocabulary Building |

---

## 🧠 Metodoloji Çerçevesi

### 1. Comprehensible Input (Krashen's i+1)
**Prensip:** Mevcut seviyenin biraz üstünde (i+1) materyal ile doğal edinim.

**Uygulama:**
- British podcast/video içerikleri (BBC Learning English, British Council)
- Teknik dokümanlar (semi-trailer manuals, industry publications)
- Graded readers (B1-B2 seviyesi)

### 2. Shadowing Technique (Kaizen Dil Öğrenimi)
**Prensip:** Native konuşmacıyı anlık olarak taklit etme.

**Aşamalar:**
1. **Passive Listening** - 2-3 kez dinle, anlam kavra
2. **Active Listening** - Transcript ile takip et
3. **Mumbling** - Sessizce dudak hareketleriyle takip
4. **Shadowing** - Aynı anda sesli tekrar
5. **Independent** - Bağımsız üretim

**British Accent için Odak Noktaları:**
- Non-rhotic 'r' (car → /kɑː/)
- Long 'a' (bath → /bɑːθ/)
- T-glottalization (butter → /ˈbʌʔə/)
- Linking sounds

### 3. Chunking & Collocations
**Prensip:** Kelime yerine hazır kalıp öğrenme.

**Örnek Chunks (Teknik Bağlam):**
```
"I'd like to walk you through..."
"As you can see from the specifications..."
"The lead time for this would be..."
"Let me get back to you on that."
"We're looking at approximately..."
```

**Örnek Chunks (Sosyal Bağlam):**
```
"Shall we say around 7?"
"I was wondering if you'd like to..."
"That sounds lovely."
"I'm afraid I'll have to..."
"Would you mind if...?"
```

### 4. Spaced Repetition System (SRS)
**Prensip:** Leitner Box / SM-2 algoritması ile optimal tekrar zamanlaması.

**Aralıklar:**
- İlk tekrar: 1 gün
- İkinci: 3 gün
- Üçüncü: 7 gün
- Dördüncü: 14 gün
- Beşinci: 30 gün
- (Başarısızlıkta başa dön)

### 5. Fluency First Approach (Anti-Perfectionism)
**Prensip:** Akıcılık > Doğruluk (başlangıçta)

**Uygulama:**
- Zamanlı konuşma egzersizleri (60 saniyede anlat)
- "Good enough" feedback sistemi
- Error tolerance scoring (%70 doğruluk = başarılı)
- Progressive accuracy (akıcılık kazanıldıkça doğruluk artar)

### 6. Direct Association Method
**Prensip:** Türkçe çeviri yerine görsel/bağlamsal ilişkilendirme.

**Uygulama:**
- Görsel flashcard'lar (kelime + görsel, Türkçe yok)
- Situation-based learning (bağlam içinde öğrenme)
- English-to-English definitions

### 7. Tense Mastery Through Stories
**Prensip:** İzole gramer yerine bağlam içinde zaman öğrenme.

**Türkçe-İngilizce Zaman Eşleştirmesi:**
| Türkçe | İngilizce | Örnek |
|--------|-----------|-------|
| -DI (Belirli Geçmiş) | Past Simple | I sent the quotation yesterday. |
| -MIŞ (Belirsiz/Duyum) | Present Perfect / Reported | I've heard they received it. / They said they had received it. |
| -IYOR (Şimdiki) | Present Continuous | I'm preparing the documents. |
| -IR/-AR (Geniş) | Present Simple | We manufacture semi-trailers. |
| -ECEK (Gelecek) | Will / Going to | We'll ship next week. |
| -IYORDU (Süregelen Geçmiş) | Past Continuous | We were discussing when you called. |

---

## 🏗️ Uygulama Mimarisi

### Modüller

#### 1. 🎧 Immersion Hub
- British English podcast/video entegrasyonu
- Daily listening challenge (15-30 dk)
- Comprehension quizzes
- Subtitle toggle (önce açık, sonra kapalı)

#### 2. 🗣️ Shadowing Studio
- Native audio + waveform visualization
- Recording & comparison
- Pronunciation scoring (Web Speech API)
- British accent specific drills

#### 3. 📦 Chunk Library
- Domain-based categories (Technical, Travel, Social)
- Audio pronunciation (British)
- Usage examples in context
- SRS review system

#### 4. ⏰ Tense Trainer
- Interactive timeline visualization
- Story-based exercises
- Turkish-English mapping guide
- Common error correction

#### 5. 💬 Conversation Simulator
- AI-powered role-play scenarios
- Airport, Technical meeting, Dinner scenarios
- Real-time speech recognition
- Fluency-focused feedback

#### 6. 📊 Progress Dashboard
- Daily streak tracker
- Vocabulary growth chart
- Weak areas identification
- Weekly review suggestions

#### 7. 🔔 Daily Micro-Immersion
- Push notifications with daily phrase
- "Word of the day" with audio
- Quick 2-minute exercises
- Anti-atrophy reminders

---

## 🎨 UI/UX Tasarım Prensipleri

### Görsel Dil
- **Tema:** Premium, minimal, Apple-inspired (Lewis'in tercihi)
- **Renk Paleti:** 
  - Primary: Deep Navy (#1a365d)
  - Accent: British Racing Green (#004225)
  - Background: Warm White (#fafaf9)
  - Success: Emerald (#059669)
- **Tipografi:** 
  - Display: Playfair Display (British elegance)
  - Body: Source Sans Pro (readability)
- **Animasyonlar:** Subtle, purposeful micro-interactions

### Gamification (Hafif)
- Daily streaks (kırılınca motivasyon kaybı önleme)
- Achievement badges (teknik terminoloji master, vb.)
- Progress visualization (not leaderboards - personal growth focus)

---

## 🔧 Teknik Stack

### Frontend
```
- React 18 + TypeScript
- TailwindCSS (custom theme)
- Framer Motion (animations)
- React Query (data fetching)
- Zustand (state management)
```

### Audio & Speech
```
- Web Speech API (recognition + synthesis)
- Tone.js (audio processing)
- WaveSurfer.js (waveform visualization)
- British English TTS voices
```

### Data & Storage
```
- IndexedDB (offline-first)
- LocalStorage (preferences)
- Optional: Supabase/Firebase (sync)
```

### Content
```
- Custom JSON content files
- Markdown for lessons
- Audio files (MP3/OGG)
```

---

## 📁 Proje Yapısı

```
english-flow/
├── public/
│   ├── audio/
│   │   ├── chunks/
│   │   ├── vocabulary/
│   │   └── shadowing/
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── immersion/
│   │   ├── shadowing/
│   │   ├── chunks/
│   │   ├── tenses/
│   │   ├── conversation/
│   │   └── dashboard/
│   ├── hooks/
│   │   ├── useSpeechRecognition.ts
│   │   ├── useSpeechSynthesis.ts
│   │   ├── useAudioPlayer.ts
│   │   └── useSRS.ts
│   ├── stores/
│   │   ├── userProgress.ts
│   │   ├── vocabulary.ts
│   │   └── settings.ts
│   ├── data/
│   │   ├── chunks/
│   │   │   ├── technical.json
│   │   │   ├── travel.json
│   │   │   └── social.json
│   │   ├── vocabulary/
│   │   ├── tenses/
│   │   └── scenarios/
│   ├── utils/
│   │   ├── srs.ts
│   │   ├── scoring.ts
│   │   └── audio.ts
│   ├── pages/
│   ├── styles/
│   └── types/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 MVP Özellikleri (Faz 1)

### Hafta 1-2: Temel Altyapı
- [ ] Project setup (Vite + React + TS + Tailwind)
- [ ] Routing ve layout
- [ ] Theme ve design system
- [ ] IndexedDB integration

### Hafta 3-4: Chunk Library
- [ ] Chunk data structure
- [ ] Category navigation
- [ ] Audio playback (British TTS)
- [ ] SRS engine

### Hafta 5-6: Shadowing Studio
- [ ] Audio player component
- [ ] Recording functionality
- [ ] Waveform visualization
- [ ] Basic comparison

### Hafta 7-8: Conversation Simulator
- [ ] Scenario selection
- [ ] Speech recognition integration
- [ ] Response evaluation
- [ ] Feedback system

### Hafta 9-10: Dashboard & Polish
- [ ] Progress tracking
- [ ] Statistics visualization
- [ ] Settings & preferences
- [ ] PWA setup (offline)

---

## 📝 Örnek İçerik Yapısı

### Technical Chunk Example
```json
{
  "id": "tech_001",
  "category": "technical",
  "subcategory": "quotations",
  "chunk": "I'd like to walk you through the specifications",
  "ipa": "/aɪd laɪk tə wɔːk juː θruː ðə ˌspesɪfɪˈkeɪʃənz/",
  "audioUrl": "/audio/chunks/tech_001.mp3",
  "context": "Presenting technical details to a client",
  "example": "I'd like to walk you through the specifications of our 14.7 cubic metre concrete mixer.",
  "turkishEquivalent": "Sizinle teknik özellikleri incelemek isterim",
  "variations": [
    "Let me walk you through...",
    "Allow me to explain..."
  ],
  "difficulty": "B1",
  "tags": ["presentation", "formal", "client-facing"]
}
```

### Scenario Example
```json
{
  "id": "scenario_airport_001",
  "title": "Check-in at Heathrow",
  "setting": "Airport check-in counter",
  "difficulty": "B1",
  "objectives": [
    "Request window seat",
    "Ask about baggage allowance",
    "Confirm gate information"
  ],
  "dialogue": [
    {
      "role": "agent",
      "text": "Good morning, sir. May I see your passport and booking reference, please?",
      "audioUrl": "/audio/scenarios/airport_001_01.mp3"
    },
    {
      "role": "user",
      "expectedResponses": [
        "Here you are. I'm on the flight to Istanbul.",
        "Of course. Here's my passport."
      ],
      "hints": ["Hand over documents politely"]
    }
  ]
}
```

---

## 🎯 Başarı Metrikleri

| Metrik | Hedef | Ölçüm |
|--------|-------|-------|
| Daily Active Use | 15+ dakika | App analytics |
| Chunk Retention | %80 (30 gün sonra) | SRS data |
| Speaking Confidence | +2 level (self-report) | Weekly survey |
| Vocabulary Growth | +50 kelime/ay | System tracking |
| Streak Maintenance | 21+ gün | App data |

---

## 💡 Ek Öneriler

### Günlük Rutin Önerisi
```
Sabah (10 dk):
├── Word of the day review
└── 1 chunk shadowing

Öğle (15 dk):
├── Podcast listening (BBC 6 Minute English)
└── Comprehension check

Akşam (20 dk):
├── SRS review session
├── 1 conversation simulation
└── Progress check
```

### Tavsiye Edilen Kaynaklar (British English)
- **Podcast:** BBC Learning English, The English We Speak
- **YouTube:** BBC Learning English, English with Lucy
- **App Desteği:** Youglish (British filter), Forvo (pronunciation)

---

*Bu döküman, EnglishFlow uygulamasının temelini oluşturur ve Claude Code ile geliştirme sürecinde referans olarak kullanılacaktır.*

---

## 🤖 AI Director Mode (11 Ocak 2026)

### Genel Bakış
AI Director Mode, Conversation Simulator'daki statik diyalog akışını dinamik ve gerçekçi bir deneyime dönüştüren gelişmiş bir özelliktir. Gemini AI kullanarak kullanıcı cevaplarını analiz eder ve konuşma akışını yönetir.

### Temel Özellikler

#### 1. Akış Kontrol Sistemi (Action Types)
| Action | Açıklama | Kullanım Durumu |
|--------|----------|-----------------|
| `NEXT_TURN` | Kullanıcı soruyu cevapladı, bir sonraki tura geç | Geçerli cevap verildiğinde |
| `STAY` | Aynı soruda kal, AI dinamik cevap üretir | Alakasız cevap, yardım talebi, açıklama isteme |
| `TERMINATE` | Konuşmayı sonlandır | Kullanıcı çıkmak istiyor, sabır tükendi, belge eksik |

#### 2. Sabır Kotası (Patience Quota)
- Kullanıcının **7 STAY** hakkı vardır
- Her off-topic cevap kotadan düşer
- 7. denemede `TERMINATE` tetiklenir
- Geçerli cevap (NEXT_TURN) kotayı sıfırlar

#### 3. Dinamik Mesaj Biriktirme (stayExchanges)
```typescript
interface StayExchange {
  userText: string      // Kullanıcının off-topic mesajı
  userScore: number     // Eşleşme puanı
  aiResponse: string    // AI'ın yönlendirme cevabı
}
```
- Her STAY action'ında kullanıcı mesajı + AI cevabı array'e eklenir
- Sıralı görüntüleme sağlar
- NEXT_TURN ile temizlenir

#### 4. Text-to-Speech Entegrasyonu
- AI cevapları otomatik olarak seslendirilir
- `speak(text)` fonksiyonu ile British accent TTS

---

### AI Empati ve Gerçekçilik Kategorileri

AI artık kullanıcı cevaplarını 8 kategoride değerlendiriyor:

#### A) Geçerli Cevap → `NEXT_TURN`
Kullanıcı soruyu cevapladı (kısmen bile olsa), senaryo ilerler.

#### B) Acil Durum / Fenalık → `STAY` + Gerçek İlgi
**Tetikleyiciler:** sick, unwell, faint, dizzy, water urgently, help me
```
Kullanıcı: "I'm not feeling well, I need water"
AI: "I understand. Let me get you some water right away. Once you feel a bit better, 
     could you please tell me the purpose of your visit?"
```

#### C) Gönüllü Geri Dönüş İsteği → `TERMINATE` Nazikçe
**Tetikleyiciler:** go back, return to my country, cancel, don't want to enter
```
Kullanıcı: "I want to go back to my country"
AI: "I understand. I'll arrange for an officer to assist you with the return process. 
     Please follow my colleague. Safe travels."
```

#### D) Dil Bariyeri → `STAY` + Sabır
**Tetikleyiciler:** I don't speak English, can't understand, don't know the language
```
Kullanıcı: "I don't speak English very well"
AI: "No problem. Would you like me to call an interpreter? For now, can you simply 
     tell me: business or holiday?"
```

#### E) Belge Sorunları → `TERMINATE` Yardımcı
**Tetikleyiciler:** can't find passport, left bag on plane, forgot documents
```
Kullanıcı: "I left my bag on the plane, my passport was inside"
AI: "I understand. Without your passport, I cannot process your entry. Let me call 
     ground services to help locate your bag on the aircraft. Please wait here."
```

#### F) Olağandışı Durumlar → `STAY` + Bilgi Toplama
**Tetikleyiciler:** flight diverted, transit, going to Belgium, unplanned arrival
```
Kullanıcı: "My flight was diverted, I was going to Belgium"
AI: "I see, so your flight was diverted here due to weather. Were you planning to 
     continue to Belgium, or will you be staying in the UK?"
```

#### G) Vize Endişeleri → `STAY` + Değerlendirme
**Tetikleyiciler:** visa expires, visa issue, visa problem
```
Kullanıcı: "My visa expires in 2 days"
AI: "I see your visa expires in 2 days. For a short visit, that should be fine. 
     What is the purpose of your visit?"
```

#### H) Gerçek Alakasızlık → `STAY` + Yönlendirme
**Tetikleyiciler:** Hava durumu, spor, kişisel sorular
```
Kullanıcı: "What's the weather like in London?"
AI: "It's quite cold today. Now, could you please tell me the purpose of your visit?"
```

---

### Teknik Implementasyon

#### Dosya Değişiklikleri

**`src/services/aiService.ts`**
- Gemini API entegrasyonu (REST API)
- Model fallback sistemi: `gemini-2.5-flash` → `gemini-2.0-flash-exp` → `gemini-1.5-flash`
- Başarılı model caching (`localStorage`)
- Kapsamlı prompt engineering

**`src/pages/ConversationSimulator.tsx`**
- `stayExchanges` state: Off-topic mesajları biriktirme
- `offTopicCount` state: Sabır kotası takibi
- `closeFeedbackAndContinue` güncellendi:
  - AI cevabı önceki turn (agent) kontrol edilerek üretiliyor
  - STAY durumunda `userResponses`'dan silme (duplikasyon önleme)
  - TTS entegrasyonu (`speak(text)`)
- Render güncellendi:
  - Ana diyalog döngüsü + stayExchanges array'i
  - STAY mesajları için görsel ayrım (border-l-4)

#### State Yönetimi
```typescript
// STAY exchange biriktirme
const [stayExchanges, setStayExchanges] = useState<StayExchange[]>([])

// Sabır kotası
const [offTopicCount, setOffTopicCount] = useState(0)

// AI cevapları (NEXT_TURN için)
const [aiResponses, setAiResponses] = useState<Map<number, string>>(new Map())
```

#### API Çağrı Akışı
```
1. Kullanıcı cevap verir → submitResponse()
2. Feedback popup açılır → showFeedback = true
3. Kullanıcı "Devam Et" tıklar → closeFeedbackAndContinue()
4. AI cevap üretir → generateDynamicResponse()
5. Action'a göre işlem:
   - NEXT_TURN: aiResponses güncelle, turn++ 
   - STAY: stayExchanges'e ekle, userResponses'dan sil, speak()
   - TERMINATE: terminationConfig'e göre yönlendir
```

---

### Hata Ayıklama ve Debug Logları

Konsol logları ile akış takibi:
```
🔑 AI Service initialized
🔑 API Key present: true
🎬 closeFeedbackAndContinue called
🎬 currentTurnIndex: 1
🎬 transcript: "can I have some water"
🤖 Checking AI generation condition
🤖 answeredTurn (previous): turn_1 agent
🤖 ENTERING AI generation block!
📡 Attempting REST API call to: gemini-2.5-flash
✅ Success with gemini-2.5-flash
🤖 AI Response received: {text: "...", action: "STAY", reason: "..."}
🔊 Speaking dynamic AI response: "I'm sorry..."
```

---

### Gelecek İyileştirmeler

- [ ] Conversation history'yi AI'a gönderme (bağlam zenginleştirme)
- [ ] Sentiment analysis ile duygu durumu algılama
- [ ] Multi-language support (tercüman çağırma simülasyonu)
- [ ] Voice tone analysis (kullanıcı ses tonundan stres algılama)
- [ ] Scenario branching (kullanıcı tercihlerine göre dallanma)

---

### Senaryo Kapsamı

| Metrik | Değer |
|--------|-------|
| Toplam Senaryo | **51** |
| terminationConfig | **51** (100%) |
| turn_abort | **51** (100%) |
| AI Director Mode | **Tüm senaryolarda aktif** |

**Her senaryoya eklenen yapılandırma:**
```typescript
terminationConfig: {
  keywords: ['go back', 'return to', 'scared', 'afraid', 'cancel', 
             'don\'t want to', 'withdraw', 'change my mind', 
             'help me', 'I can\'t find my passport', 'lost passport'],
  targetTurnId: 'turn_abort'
}
```

**Her senaryoya eklenen sonlandırma turn'i:**
```typescript
{
  id: 'turn_abort',
  role: 'agent',
  text: 'I understand. The conversation has ended. An assistant will help you with your concerns.',
  hints: ['Follow instructions'],
  expectedResponses: [
    { text: 'Thank you.', score: 100 },
    { text: 'Okay, I understand.', score: 100 }
  ]
}
```

---

### Versiyon Geçmişi

| Tarih | Değişiklik |
|-------|------------|
| 11 Ocak 2026 | AI Director Mode ilk implementasyon |
| 11 Ocak 2026 | Turn index bug düzeltmesi (previous turn kontrolü) |
| 11 Ocak 2026 | Dinamik mesaj sistemi (stayExchanges array) |
| 11 Ocak 2026 | Mesaj duplikasyonu düzeltmesi |
| 11 Ocak 2026 | TTS entegrasyonu (STAY cevapları) |
| 11 Ocak 2026 | Empati ve gerçekçilik kategorileri (8 kategori) |
| 11 Ocak 2026 | Edge case'ler (dil bariyeri, belge sorunları, vize, vb.) |
| 11 Ocak 2026 | `isTerminatedEarly` flag - erken sonlandırma desteği |
| 11 Ocak 2026 | Erken sonlandırmada mikrofon yerine tamamlama butonu |
| 11 Ocak 2026 | Atlanan turn'lerin render edilmemesi düzeltmesi |
| 11 Ocak 2026 | Başlık güncelleme: "AI Destekli Konuşma Pratiği" |
| 11 Ocak 2026 | **51 senaryoya terminationConfig ve turn_abort eklendi** |
| 14 Ocak 2026 | SPA Routing düzeltmesi (`vercel.json` rewrites) |
| 14 Ocak 2026 | iOS PWA Touch Optimizasyonları |
| 14 Ocak 2026 | **Code-Splitting ile %85 bundle küçültme** |
| 24 Ocak 2026 | iOS Premium Voice kılavuzu eklendi (Settings sayfası) |

---

## 🔧 Performans Optimizasyonları (14 Ocak 2026)

### SPA Routing Düzeltmesi

**Problem:** Sayfa yenilendiğinde 404 hatası (örn: `/settings` → 404)

**Çözüm:** `vercel.json` ile tüm istekleri `index.html`'e yönlendirme:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### iOS PWA Touch Optimizasyonları

**Problem:** iPhone Safari/PWA'da menü geçişlerinde 5-6 saniye gecikme

**Çözümler:**

| Optimizasyon | Açıklama |
|--------------|----------|
| `touch-action: manipulation` | 300ms iOS tap delay kaldırıldı |
| `-webkit-tap-highlight-color: transparent` | Dokunma highlight'ı kaldırıldı |
| `user-scalable=no` | Yanlışlıkla zoom engellendi |
| `apple-mobile-web-app-capable` | PWA standalone mode |
| `transform: translateZ(0)` | GPU hızlandırma |
| `transition-duration: 150ms` | Mobilde daha hızlı geçişler |
| `overscroll-behavior: none` | iOS rubber-band scroll engeli |
| `min-height/width: 44px` | Apple HIG uyumlu dokunma hedefleri |

**Eklenen Meta Taglar:**
```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="EnglishFlow" />
<meta name="format-detection" content="telephone=no" />
```

### Code-Splitting (React.lazy)

**Problem:** 1.3MB tek bundle → yavaş yükleme ve navigasyon

**Çözüm:** `React.lazy()` ile sayfa bazlı code-splitting

| Metrik | Önce | Şimdi |
|--------|------|-------|
| Ana bundle | **1,335 KB** | **199 KB** |
| Küçülme | - | **%85** |

**Sayfa Chunk Boyutları:**
```
index.js                    199 KB (ana bundle)
Dashboard.js                 25 KB
Settings.js                  25 KB
TenseTrainer.js              27 KB
ChunkLibrary.js              95 KB
ShadowingStudio.js          126 KB
ConversationSimulator.js    262 KB
VocabularyLibrary.js        459 KB
```

**Nasıl çalışıyor:**
1.  `/` açıldığında: Sadece `index.js` + `Dashboard.js` yüklenir
2.  Başka sayfaya gidince: O sayfa chunk'ı o an yüklenir
3.  Loading spinner gösterilir → anında sayfa render

**Uygulama:**
```tsx
import { Suspense, lazy } from 'react'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Settings'))
// ... diğer sayfalar

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        {/* ... */}
      </Routes>
    </Suspense>
  )
}
```

---

## 🌐 Cloud TTS & Ses Motoru Güncellemesi (25 Ocak 2026)

### Genel Bakış
Uygulamaya yüksek kaliteli, doğal ve insansı sesler eklemek için Google Cloud TTS ve ElevenLabs entegrasyonu yapılmıştır. "Unified TTS" mimarisi sayesinde uygulama, seçilen sağlayıcıya (Google/ElevenLabs/Local) göre otomatik olarak en iyi ses deneyimini sunar.

### Yeni Özellikler

#### 1. Çoklu Ses Sağlayıcı (Multi-Provider) Desteği
- **Google Cloud TTS:** Saf, net ve yüksek kaliteli Neural2 sesleri (Safari uyumlu).
- **ElevenLabs Premium:** Ultra gerçekçi, nefes alan ve tonlama yapan yapay zeka sesleri.
- **Local (Device):** Çevrimdışı kullanım için cihazın kendi ses motoru.

#### 2. Unified TTS Mimarisi (`useUnifiedTTS` Hook)
- Tek bir hook üzerinden tüm ses motorlarını yönetir.
- `speak(text)` çağrıldığında, ayarlarda seçili olan sağlayıcıya (Google/ElevenLabs) otomatik yönlendirme yapar.
- Cloud servislerinde hata olması durumunda kullanıcıya görsel geri bildirim verir.
- **Echo Prevention:** Aynı metnin üst üste binerek (yankı) çalmasını engelleyen akıllı kontrol mekanizması (`useRef` logic).

#### 3. Conversation Simulator Entegrasyonu
- Simülasyon artık seçilen Cloud ses motorunu kullanıyor.
- Karakterler (Agent) çok daha doğal ve akıcı konuşuyor.
- Dudak/Dalga animasyonları Cloud TTS ile senkronize edildi (`isSpeaking` state yönetimi).
- Hata durumunda (Quota, API hatası) kullanıcı uyarı sistemi.

### Teknik Detaylar
- **Vercel Edge Functions:** API anahtarlarını (Google & ElevenLabs) gizlemek için sunucu taraflı proxy endpointleri (`/api/google-tts`, `/api/tts`).
- **Settings UI:** Basitleştirilmiş ses motoru seçimi. Gereksiz dropdownlar kaldırıldı.
- **Güvenlik:** API anahtarları client-side kodunda değil, Vercel Environment Variables içinde saklanır.

### Versiyon Geçmişi Eklemesi
| Tarih | Değişiklik |
|-------|------------|
| 25 Ocak 2026 | Google Cloud TTS Entegrasyonu (Neural2) |
| 25 Ocak 2026 | ElevenLabs API Entegrasyonu (Proxy) |
| 25 Ocak 2026 | Unified TTS Mimarisi ve Provider Selection UI |
| 25 Ocak 2026 | Conversation Simulator Cloud Ses Desteği |
| 25 Ocak 2026 | Ses yankı (echo) ve animasyon senkronizasyon düzeltmeleri |

## ⚡️ Geniş Kapsamlı Performans Optimizasyonları (25 Ocak 2026)

### Versiyon 1.1.0 Güncellemesi

**Problem:** Chunks Library (+500 öğe) ve Conversation Simulator gibi listelerde kaydırma performansı düşüktü ve mobil cihazlarda ciddi takılmalar (layout thrashing) yaşanıyordu.

### Çözümler

#### 1. Infinite Scroll (Sonsuz Kaydırma)
- **Eski:** Tüm liste tek seferde render ediliyordu (DOM Size > 3000 node).
- **Yeni:** `useIntersectionObserver` hook ile geliştirilen sonsuz kaydırma.
- **Mekanizma:**
  - Açılışta sadece **10 öğe** yüklenir.
  - Kullanıcı listenin sonuna yaklaştığında (görünmez bir "trigger" elemanı) otomatik olarak bir sonraki 10 öğeyi yükler.
  - "Show More" butonu kaldırıldı, deneyim tamamen akışkan hale getirildi.

#### 2. Layout Thrashing (Animasyon Kilitlenmesi) Giderildi
- **Problem:** `Framer Motion` kütüphanesinin `layout` prop'u, liste elemanları her değiştiğinde tüm listenin koordinatlarını yeniden hesaplıyordu (Reflow/Repaint). Mobil CPU'yu %100'e kilitliyordu.
- **Çözüm:** `layout` prop'u kaldırıldı. `AnimatePresence` optimize edildi.
- **Sonuç:** Liste kaydırma performansı 60 FPS'e sabitlendi. Titreme (flickering) sorunları çözüldü.

#### 3. Shadowing Studio Geçiş Optimizasyonu
- **Problem:** Chunks -> Shadowing sekmesine geçerken 2-3 saniyelik donma.
- **Analiz:** `ShadowingStudio` bileşeni her mount olduğunda tüm içerik verisini (`shadowingContent`) gereksiz yere filtreliyordu.
- **Çözüm:** Filtreleme mantığı `useMemo` ile önbelleğe alındı. Geçişler artık anlık (instant).

#### 4. Lazy Init (Gecikmeli Başlatma)
- **Problem:** Uygulama açılışında Speech Recognition ve TTS modülleri hemen başlatılıyordu.
- **Çözüm:** Bu ağır modüller artık sadece kullanıcı ilgili sayfaya (Konuşma/Chat) girdiğinde başlatılıyor.

### Versiyon Geçmişi Eklemesi
| Tarih | Versiyon | Değişiklik |
|-------|----------|------------|
| 25 Ocak 2026 | **v1.1.0** | **Infinite Scroll** (Chunks & Chat scenarios) |
| 25 Ocak 2026 | v1.1.0 | Layout Thrashing Fix (Animation optimization) |
| 25 Ocak 2026 | v1.1.0 | Shadowing Studio Transition Fix (Memoization) |
| 25 Ocak 2026 | v1.1.0 | Lazy Initialization of Heavy Modules |
