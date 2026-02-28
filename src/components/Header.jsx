import './Header.scss';

const Header = ({ score }) => {
  return (
    <header className="header-container">
      <div className="title">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className="score-card">
        <span className="score-label">SCORE</span>
        <span className="score-number">{score}</span>
      </div>
    </header>
  );
};

export default Header;