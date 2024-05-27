import {BrowserRouter, Route, Routes} from 'react-router-dom'
import IntroFirstPage from './components/IntroFirstPage'
import IntroSecondPage from './components/IntroSecondPage'
import IntroThirdPage from './components/IntroThirdPage'
import InstructionPage from './components/InstructionPage'
import GameSection from './components/GameSection'
import ResultSection from './components/ResultSection'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<IntroFirstPage />} />
      <Route exact path="/intro" element={<IntroSecondPage />} />
      <Route exact path="/intro-2" element={<IntroThirdPage />} />
      <Route exact path="/instructions" element={<InstructionPage />} />
      <Route exact path="/game-start" element={<GameSection />} />
      <Route exact path="/result" element={<ResultSection />} />
    </Routes>
  </BrowserRouter>
)
export default App
