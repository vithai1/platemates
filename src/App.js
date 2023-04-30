import './App.css';
import cookbook from "./assets/cookbook.jpg"
import calendar from "./assets/calendar.jpg"

function App() {
  return (
    <div className="App">
      <div className='head'>
        <header>
          <h1>PlateMates</h1>
        </header>
      </div>
      <body>
        <div className='rec-wrap'>
          <div className='rec-item'>
          <h2>Recipe Recommendations</h2>
          </div>
        </div>
        <div className ="cookbook-wrap">
          <div className='cookbook-item'>
            <image src= {cookbook} alt= "cookbook"/>
            <h2>Cookbook</h2>
          </div>
        </div>
        <div className='calendar-wrap'>
          <div className='calendar-item'>
            <image src= {calendar} alt= "calendar"/>
            <h2>Calendar</h2>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
