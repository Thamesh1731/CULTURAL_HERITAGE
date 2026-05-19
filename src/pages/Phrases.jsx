import React from 'react';

const phrasesData = [
  {
    id: 1,
    phrase: 'Vanakkam (Tamil)',
    meaning: 'Hello / Greetings.'
  },
  {
    id: 2,
    phrase: 'Namaskaram (Telugu/Malayalam)',
    meaning: 'A respectful greeting.'
  },
  {
    id: 3,
    phrase: 'Nandri (Tamil)',
    meaning: 'Thank you.'
  },
  {
    id: 4,
    phrase: 'Bhojanam ayyindha? (Telugu)',
    meaning: 'Have you had your meal?'
  },
  {
    id: 5,
    phrase: 'Oota aayitha? (Kannada)',
    meaning: 'Did you have your lunch?'
  },
  {
    id: 6,
    phrase: 'Sukhamaano? (Malayalam)',
    meaning: 'How are you?'
  },
];

const Phrases = () => {
  const playAudio = () => {
    alert('Audio playback is not implemented yet.');
  }

  return (
    <div className="page-content">
      <h1>Language & Phrases of South India</h1>
      <ul className="phrases-list">
        {phrasesData.map(item => (
          <li key={item.id} className="phrase-item">
            <div>
              <span className="phrase">{item.phrase}</span>
              <span className="meaning">{item.meaning}</span>
            </div>
            <button onClick={playAudio} className="btn-audio" aria-label={`Listen to ${item.phrase}`}>🔊</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phrases;
