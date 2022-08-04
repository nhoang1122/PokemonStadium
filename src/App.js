
import './App.css';

import {Routes, Route} from 'react-router-dom'


import Header from './Components/Header';
import Home from './Components/Home';
import PokeLibrary from './Components/PokeLibrary';
import BattleArena from './Components/BattleArena';

import BattleArena2 from './Components/BattleArena2';

function App() {
  return (
    <div>
      <Header />
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/library' element={<PokeLibrary />}></Route>
        <Route path='/battle' element={<BattleArena2 />}></Route>
       </Routes>
    </div>
  
  );
}

export default App;
