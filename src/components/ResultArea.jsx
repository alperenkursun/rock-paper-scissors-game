import './ResultArea.scss';
import { FaHandPaper, FaHandScissors, FaHandRock } from 'react-icons/fa';

const ResultArea = ({ userChoice, computerChoice, result, onPlayAgain }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'paper': return <FaHandPaper size={60} />;
      case 'scissors': return <FaHandScissors size={60} />;
      case 'rock': return <FaHandRock size={60} />;
      default: return null;
    }
  };

  return (
    <div className="result-container">
      <div className="choice-side">
        <h3>SİZİN SEÇİMİNİZ</h3>
        <div className={`icon-wrapper ${userChoice.id}`}>
          <div className="inner-circle">{getIcon(userChoice.id)}</div>
        </div>
      </div>

      <div className="result-message">
        <h2>
          {result === "WIN" && "KAZANDIN!"}
          {result === "LOSE" && "KAYBETTİN!"}
          {result === "DRAW" && "BERABERE!"}
        </h2>
        {onPlayAgain && (
          <button className="play-again-btn" onClick={onPlayAgain}>
            TEKRAR OYNA
          </button>
        )}
      </div>

      <div className="choice-side">
        <h3>BİLGİSAYARIN SEÇİMİ</h3>
        <div className={`icon-wrapper ${computerChoice.id}`}>
          <div className="inner-circle">{getIcon(computerChoice.id)}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;