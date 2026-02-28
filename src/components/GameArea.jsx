import './GameArea.scss';
import { FaHandPaper, FaHandScissors, FaHandRock } from 'react-icons/fa';

const GameArea = ({ onSelect }) => {
  return (
    <main className="game-container">
      <div className="triangle-wrapper">
        <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#141539" strokeWidth="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z" />
        </svg>
      </div>
      
      <div className="game-grid">
        <div className="icon-wrapper paper" onClick={() => onSelect({id: 'paper', name: 'KAĞIT'})}>
          <div className="inner-circle"><FaHandPaper size={55} /></div>
        </div>
        <div className="icon-wrapper scissors" onClick={() => onSelect({id: 'scissors', name: 'MAKAS'})}>
          <div className="inner-circle"><FaHandScissors size={55} /></div>
        </div>
        <div className="icon-wrapper rock" onClick={() => onSelect({id: 'rock', name: 'TAŞ'})}>
          <div className="inner-circle"><FaHandRock size={55} /></div>
        </div>
      </div>
    </main>
  );
};
export default GameArea;