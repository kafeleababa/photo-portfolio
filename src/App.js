import cover from './Switzerland_003.jpg'
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Switzerland</h1>
        <img src={cover} width={500} alt='lake'/>
      </header>
    </div>
  );
}

export default App;
