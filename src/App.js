import './App.css';
import { CurrentTimeComponent } from './components/CurrentTimeComponent';
import { CurrentCrewList } from './components/CurrentCrew';
import { MapContainer } from './components/MapContainer';


function App() {
  return (
    <div className="App">
      <MapContainer />
      <div className='sidebar-container'>
        <CurrentTimeComponent />
        <CurrentCrewList />
      </div>
    </div>
  );
}

export default App;
