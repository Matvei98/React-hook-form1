import { Routes,Route } from 'react-router-dom';
import './App.css'
import Subscribe from './components/Subscribe';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/subscribe' element={<Subscribe/>}/>
      </Routes>
    </div>
  );
}

export default App;
