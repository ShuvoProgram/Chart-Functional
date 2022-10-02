import './App.css';
import Chart from './component/Chart/Chart';
import NavBar from './component/NavBar/NavBar';
import PhoneBar from './component/PhoneBar/PhoneBar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Chart></Chart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
