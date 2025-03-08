import { useState } from 'react';
import { flashcards } from './data';
import Flashcard from './components/Flashcard';
import './styles.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="app">
      <header>
        <h1>💰 Teen Financial Literacy Flashcards</h1>
        <p>Test your knowledge of money management!</p>
        <p>Total Cards: {flashcards.length}</p>
      </header>
      <Flashcard card={flashcards[currentCardIndex]} onNext={handleNextCard} />
    </div>
  );
}

export default App;