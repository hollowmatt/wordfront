import './App.css';
import Title from './components/Title';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="p-0 bg-ggray-200">
      <h1 className='text-3xl font-bold'>
        <Title />
        <Grid />
        <Keyboard />
      </h1>
    </div>
  );
}

export default App;
