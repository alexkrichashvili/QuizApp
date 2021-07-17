import './App.css';
import { useState } from 'react';
import Categories from './Categories';
import Difficulty from './Difficulty';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
     const [category, setCategory] = useState('Any category');
     const [difficulty, setDifficulty] = useState('Any difficulty');
     return (
          <Router>
               <div>
                    <div className="FlexDiv">
                         <Categories
                              category={category}
                              setCategory={setCategory}
                         />
                         <Difficulty
                              difficulty={difficulty}
                              setDifficulty={setDifficulty}
                         />
                    </div>
                    <Link to classname="startBtn">
                         start
                    </Link>
               </div>
          </Router>
     );
}

export default App;
