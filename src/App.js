import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="p-0 bg-ggray-200">
      <h1 className='text-3xl font-bold'>
        <Grid />
        <Keyboard />
      </h1>
    </div>
  );
}

export default App;
