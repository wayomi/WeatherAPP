import './App.css';
import WeatherEvents from './WeatherEvents'
import GetWeather from './API/GetWeather'

function App() {
  return (
    <div className="App">
      <GetWeather />
      <WeatherEvents/>   
    </div>
  );
}

export default App;
