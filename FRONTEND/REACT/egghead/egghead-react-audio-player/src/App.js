import { useRef } from 'react';

import AudioPlayer from './components/audio-player/audio-player.js';

import './App.css';

const src =
  "https://dts.podtrac.com/redirect.mp3/cdn.simplecast.com/audio/2ac34c/2ac34cab-4949-40aa-bac7-d7e3a70f0a39/a5c37519-9a29-464b-8008-b9aae32c0cd4/podcast_joel_with_veni_kunche_v1_mp3_tc.mp3"

function App() {
  const transcript = (
    <a href="https://egghead.simplecast.com/episodes/embrace-challenges-with-a-growth-mindset-with-veni-kunche/transcript">
      Transcript
    </a>
  );

  const audioRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessible Audio Player</h1>
      </header>
      <main>
        <AudioPlayer ref={audioRef} src={src} transcript={transcript}/>
      </main>

      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => (audioRef.current.currentTime = 11)}>Jump to Computer Scince Degree (0:11)</button>
    </div>
  );
}

export default App;
