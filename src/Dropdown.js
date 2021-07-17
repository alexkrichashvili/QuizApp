import styles from './Dropdown.module.css';
import { useState } from 'react';

export default function Dropdown({ selected, setSelected }) {
     const [isActive, setIsActive] = useState(false);
     const options = ['React', 'Angular', 'Vue'];
     return (
          <div className={styles.dropdown}>
               <div
                    className={styles.dropdown_btn}
                    onClick={e => setIsActive(!isActive)}
               >
                    {selected}
               </div>
               {isActive && (
                    <div className={styles.dropdown_content}>
                         {options.map(option => (
                              <div
                                   onClick={e => {
                                        setSelected(option);
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
