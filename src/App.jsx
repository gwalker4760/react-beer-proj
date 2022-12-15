import './App.scss';
import ExploreBeer from "./components/ExploreBeer/ExploreBeer";
import Beer from './components/FilteredProductTable/Beer/Beer';

function App() {

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <div className='container'>
        <ExploreBeer />
        
        <div className='beer'>
        <Beer />
        </div>
      </div>
    </div>
  );
}

export default App;
