import { Routes, Route } from 'react-router-dom'

import { Suspense, lazy } from 'react'
import Layout from './components/common/Layout'
import ThemeProvider from './components/common/ThemeProvider'
import ScrollToTop from './components/common/ScrollToTop'

// Lazy load pages for faster initial load and navigation
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Learn = lazy(() => import('./pages/Learn'))
const Practice = lazy(() => import('./pages/Practice'))
const ChunkLibrary = lazy(() => import('./pages/ChunkLibrary'))
const VocabularyLibrary = lazy(() => import('./pages/VocabularyLibrary'))
const ShadowingStudio = lazy(() => import('./pages/ShadowingStudio'))
const TenseTrainer = lazy(() => import('./pages/TenseTrainer'))
const ConversationSimulator = lazy(() => import('./pages/ConversationSimulator'))
const Settings = lazy(() => import('./pages/Settings'))

// Minimal loading spinner for fast page transitions
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-navy-200 border-t-racing-600 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* New unified pages for mobile tab bar */}
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            {/* Keep existing routes for deep linking */}
            <Route path="/chunks" element={<ChunkLibrary />} />
            <Route path="/vocabulary" element={<VocabularyLibrary />} />
            <Route path="/shadowing" element={<ShadowingStudio />} />
            <Route path="/tenses" element={<TenseTrainer />} />
            <Route path="/conversation" element={<ConversationSimulator />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  )
}

export default App
