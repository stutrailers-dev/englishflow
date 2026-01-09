import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/common/Layout'
import ThemeProvider from './components/common/ThemeProvider'
import ScrollToTop from './components/common/ScrollToTop'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import Practice from './pages/Practice'
import ChunkLibrary from './pages/ChunkLibrary'
import VocabularyLibrary from './pages/VocabularyLibrary'
import ShadowingStudio from './pages/ShadowingStudio'
import TenseTrainer from './pages/TenseTrainer'
import ConversationSimulator from './pages/ConversationSimulator'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default App
