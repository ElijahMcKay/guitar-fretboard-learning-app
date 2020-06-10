import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ round, setRound ] = useState({
    note: 'E',
    string: '6th',
  });

  const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const strings = ['1st (E)', '2nd (B)', '3rd (G)', '4th (D)', '5th (A)', '6th (E)'];

  useEffect(() => {
    setInterval(keydown, 10000)
  }, [])

  const keydown = (e) => {
    // if (e.key === "Enter" || e.click) {
      document.removeEventListener("keydown", keydown, false);
      setRound({
        note: notes[Math.floor(Math.random() * (notes.length - 0) + 0)],
        string: strings[Math.floor(Math.random() * (strings.length - 0) + 0)]
      })
    // }
  }

  console.log('rerender')

  return (
    <div className="App">
      <h1>Fretboard Learning Tool</h1>

        <div>Play <span>{round.note}</span> on the <span>{round.string}</span> string</div>
        <button>Press Enter for new note</button>
    </div>
  );
}

export default App;
