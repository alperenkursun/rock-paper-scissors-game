import './App.scss';
import Header from './components/Header';
import GameArea from './components/GameArea';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <GameArea />
      
      {/* Gelecekte buraya Tur Geçmişi gelecek */}
      <footer className="footer-history">
        <p>Gereksinim: Tur Geçmişi Buraya Listelenecek</p>
      </footer>
    </div>
  );
}

export default App;