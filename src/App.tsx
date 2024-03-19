import React from 'react';
import './App.css';
import InternshipChallengeComponent from "./components/InternshipChallengeComponent";

function App() {
    const grid = [
        '>---A-@-+',
        '        |',
        '+-U-+   C',
        '|   |   |',
        's   C---+'
    ];


  return (
    <div className="App">
        <InternshipChallengeComponent grid={grid} />
    </div>
  );
}

export default App;
