import './GameArea.scss';
import { FaHandPaper, FaHandScissors, FaHandRock } from 'react-icons/fa';

const GameArea = () => {
  return (
    <main className="game-container">
      <div className="triangle-wrapper">
        <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
          <path 
            stroke="#141539" 
            strokeWidth="15" 
            fill="none" 
            opacity=".2" 
            d="M156.5 262 300 8H13z" 
          />
        </svg>
      </div>
      
      <div className="game-grid">
        <div className="icon-wrapper paper">
          <div className="inner-circle">
            <FaHandPaper size={55} />
          </div>
        </div>

        <div className="icon-wrapper scissors">
          <div className="inner-circle">
            <FaHandScissors size={55} />
          </div>
        </div>

        <div className="icon-wrapper rock">
          <div className="inner-circle">
            <FaHandRock size={55} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameArea;