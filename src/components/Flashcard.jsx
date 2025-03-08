import { useState } from 'react';

function Flashcard({ card, onNext }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div className="flashcard-container">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="front">
            {card.image && <img src={card.image} alt="Visual aid" className="card-image" />}
            <h3>{card.question}</h3>
          </div>
          // Update the back div to:
            <div className="back" data-category={card.category}>
            <h3>Answer</h3>
            <p>{card.answer}</p>
            <div className="category-badge">{card.category}</div>
            </div>
        </div>
        <button onClick={onNext} className="next-button">
          Next Card
        </button>
      </div>
    );
  }

export default Flashcard;