import './App.css'
import NavPort from './components/navbar/navbar'
import './font.css'
import Welcome from './components/welcome/welcome.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import LastMore from './components/lastmore/lastmore.jsx'

function App() {
  return (
    <>
      <div>
        <NavPort />
        <div className="container" style={{marginTop: '80px'}}>
          <div id="welcome">
            <Welcome />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="experience">
            <LastMore />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
