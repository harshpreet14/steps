
import AudioRecording from "./AudioRecording"
function App() { 
  return (
    <div className="app">
      <section className="side-bar">
        <button> +New Entry </button>
        <ul className="history"></ul>
        <nav>
          <p>Journalling App✍️</p>
        </nav>
      </section>
      <section className="main">
        <h1>Journalling App</h1>
        <ul className="feed">
        </ul>
        <p></p>
        <AudioRecording
        className="input-audio"/>
        <div className="bottom-section">
          <div className="input-container">
            <div id="submit"></div>
          </div>
          <p className = "info"> Speak and See</p>
        </div>
      </section>
    </div>
  );
}

export default App;
