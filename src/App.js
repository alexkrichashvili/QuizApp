import './App.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Categories from './Categories';
import Difficulty from './Difficulty';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import { ANY_CATEGORY, ANY_DIFFICULITY } from './constants';

function App() {
     const [category, setCategory] = useState([ANY_CATEGORY]);
     const [difficulty, setDifficulty] = useState(ANY_DIFFICULITY);

     return (
          <Router>
               <Switch>
                    <div>
                         <div className="btnDiv">
                              <Route path="/quiz">
                                   <Quiz
                                        category={category}
                                        difficulty={difficulty}
                                   />
                              </Route>
                              <Route exact path="/">
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
                                   <Link
                                        className="startBtn"
                                        to="/quiz"
                                        classname="startBtn"
                                   >
                                        start
                                   </Link>
                              </Route>
                         </div>
                    </div>
               </Switch>
          </Router>
     );
}

export default App;
