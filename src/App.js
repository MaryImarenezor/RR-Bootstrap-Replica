import './App.css';
import TopBar from './Components/TopBar';
import BackgroundImage from './Components/BackgroundImage';
import StoreListings from './Components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListings />
    </div>
  );
}

export default App;
