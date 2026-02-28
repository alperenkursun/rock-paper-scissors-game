import './History.scss';

const History = ({ logs }) => {
  return (
    <div className="history-container">
      <h3>TUR GEÇMİŞİ</h3>
      <div className="history-list">
        {logs.length === 0 ? <p>Henüz tur oynanmadı.</p> : 
          logs.map((log, index) => (
            <div key={index} className={`history-item ${log.result}`}>
              <span>Siz: <strong>{log.user}</strong></span>
              <span>B.sayar: <strong>{log.comp}</strong></span>
              <span className="res-tag">{log.result}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default History;