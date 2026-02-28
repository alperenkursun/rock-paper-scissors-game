import './Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <div className="title">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className="score-card">
        <span className="score-label">SCORE</span>
        <span className="score-number">0</span>
      </div>
    </header>
  );
};

export default Header;