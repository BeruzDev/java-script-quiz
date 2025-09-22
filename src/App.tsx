import './App.css'
import { Container } from '@mui/material'
import Signature from './Signature'
import Navbar from './Navbar'
import Start from './Start'
import { useQuestionsStore } from './store/questions'
import Game from './Game'

function App() {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main style={{
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <Container 
        maxWidth="sm" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          py: 4
        }}
      >
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
      <Signature />
    </main>
  )
}

export default App
