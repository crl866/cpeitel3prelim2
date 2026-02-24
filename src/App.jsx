import { useState } from 'react'
import { skillList } from './data.js'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === skillList.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBack = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? skillList.length - 1 : prevIndex - 1));
  };

  const skill = skillList[index];

  return (
    <div className="wrapper-container">
      <div className="info-box">
        <header className="box-header">
          <h1>10 Things that Require Zero Talent</h1>
          <p className="writer-name">by Carl Anton David</p>
        </header>

        <main className="box-body">
          <img src={skill.url} alt={skill.alt} className="info-image" />
          <h2 className="info-title">{skill.thing}</h2>
          <p className="info-description">{skill.detail}</p>
        </main>

        <footer className="box-footer">
          <button className="action-button" onClick={handleBack}>BACK</button>
          <button className="action-button" onClick={handleNext}>NEXT</button>
        </footer>
      </div>
    </div>
  )
}

export default App
