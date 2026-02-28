import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import GameArea from './components/GameArea';
import ResultArea from './components/ResultArea';
import History from './components/History';

const choices = [
  { id: 'paper', name: 'KAĞIT' },
  { id: 'scissors', name: 'MAKAS' },
  { id: 'rock', name: 'TAŞ' }
];

function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState("");
  const [history, setHistory] = useState([]);

  const matchWinner = score >= 3 
    ? "TEBRİKLER, MAÇI SİZ KAZANDINIZ! 🏆" 
    : score <= -3 
      ? "ÜZGÜNÜM, MAÇI BİLGİSAYAR KAZANDI! 🤖" 
      : null;

  const handlePlay = (userPick) => {
    if (matchWinner) return;

    const compPick = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userPick);
    setComputerChoice(compPick);

    let result = "";
    if (userPick.id === compPick.id) {
      result = "DRAW";
    } else if (
      (userPick.id === 'rock' && compPick.id === 'scissors') ||
      (userPick.id === 'paper' && compPick.id === 'rock') ||
      (userPick.id === 'scissors' && compPick.id === 'paper')
    ) {
      result = "WIN";
      setScore(prev => prev + 1);
    } else {
      result = "LOSE";
      setScore(prev => prev - 1);
    }
    setGameResult(result);
    
    setHistory(prev => [{
      user: userPick.name,
      comp: compPick.name,
      result: result === "WIN" ? "Kazandınız" : result === "LOSE" ? "Kaybettiniz" : "Berabere",
      type: result
    }, ...prev]);
  };

  const resetTurn = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setGameResult("");
  };

  const startNewMatch = () => {
    setScore(0);
    setHistory([]);
    resetTurn();
  };

  return (
    <div className="app-wrapper">
      <Header score={score} />
      
      {!userChoice ? (
        <GameArea onSelect={handlePlay} />
      ) : (
        <ResultArea 
          userChoice={userChoice} 
          computerChoice={computerChoice} 
          result={gameResult} 
          onPlayAgain={matchWinner ? null : resetTurn} 
        />
      )}

      {matchWinner && (
        <div className="match-over-overlay">
          <div className="match-over-card">
            <h1>{matchWinner}</h1>
            <p>Skor {score}'a ulaştı. Maç tamamlandı.</p>
            <button onClick={startNewMatch}>YENİ MAÇ BAŞLAT</button>
          </div>
        </div>
      )}

      <History logs={history} />
    </div>
  );
}

export default App;