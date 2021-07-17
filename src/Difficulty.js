import styles from './Dropdown.module.css';
import { useState } from 'react';

export default function Difficulty({ difficulty, setDifficulty }) {
     const options = ['Any difficulty', 'Easy', 'Medium', 'Hard'];
     const [isActive, setIsActive] = useState(false);
     return (
          <div className={styles.dropdown}>
               <h1 className={styles.choice}>Select Difficulty</h1>
               <div
                    className={styles.dropdown_btn}
                    onClick={e => setIsActive(!isActive)}
               >
                    {difficulty}
               </div>
               {isActive && (
                    <div className={styles.dropdown_content}>
                         {options.map(option => (
                              <div
                                   onClick={e => {
                                        setDifficulty(option);
                                        setIsActive(false);
                                   }}
                                   className={styles.dropdown_item}
                              >
                                   {option}
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}
