import { useState } from 'react';

import styles from './Dropdown.module.css';

export default function Categories({ category, setCategory }) {
     const [isActive, setIsActive] = useState(false);
     const options = [
          ['General Knowledge', 9],
          ['Entertainment: Books', 10],
          ['Entertainment: Film', 11],
          ['Entertainment: Music', 12],
          ['Entertainment: Musicals & Theatres', 13],
          ['Entertainment: Television', 14],
          ['Entertainment: Video Games', 15],
          ['Entertainment: Board Games', 16],
          ['Science & Nature', 17],
          ['Science: Computers', 18],
          ['Science: Mathematics', 19],
          ['Mythology', 20],
          ['Sports', 21],
          ['Geography', 22],
          ['History', 23],
          ['Politics', 24],
          ['Art', 25],
          ['Celebrities', 26],
          ['Animals', 27],
          ['Vehicles', 28],
          ['Entertainment: Comics', 29],
          ['Science: Gadgets', 30],
          ['Entertainment: Japanese Anime & Manga', 31],
          ['Entertainment: Cartoon & Animations', 32],
     ];
     const [categoryLabel] = category;

     return (
          <div className={styles.dropdown}>
               <h1 className={styles.choice}>Select Categories</h1>
               <div
                    className={styles.dropdown_btn}
                    onClick={e => setIsActive(!isActive)}
               >
                    {categoryLabel}
               </div>
               {isActive && (
                    <div className={styles.dropdown_content}>
                         {options.map(option => {
                              const [categoryLabel] = option;

                              return (
                                   <div
                                        onClick={e => {
                                             setCategory(option);
                                             setIsActive(false);
                                        }}
                                        className={styles.dropdown_item}
                                   >
                                        {categoryLabel}
                                   </div>
                              );
                         })}
                    </div>
               )}
          </div>
     );
}
