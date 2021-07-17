import { useState } from 'react';

import styles from './Dropdown.module.css';

export default function Categories({ category, setCategory }) {
     const [isActive, setIsActive] = useState(false);
     const options = [
          'General Knowledge',
          'Entertainment: Books',
          'Entertainment: Film',
          'Entertainment: Music',
          'Entertainment: Musicals & Theatres',
          'Entertainment: Television',
          'Entertainment: Video Games',
          'Entertainment: Board Games',
          'Science & Nature',
          'Science: Computers',
          'Science: Mathematics',
          'Mythology',
          'Sports',
          'Geography',
          'History',
          'Politics',
          'Art',
          'Celebrities',
          'Animals',
          'Vehicles',
          'Entertainment: Comics',
          'Science: Gadgets',
          'Entertainment: Japanese Anime & Manga',
          'Entertainment: Cartoon & Animations',
     ];
     return (
          <div className={styles.dropdown}>
               <h1 className={styles.choice}>Select Categories</h1>
               <div
                    className={styles.dropdown_btn}
                    onClick={e => setIsActive(!isActive)}
               >
                    {category}
               </div>
               {isActive && (
                    <div className={styles.dropdown_content}>
                         {options.map(option => (
                              <div
                                   onClick={e => {
                                        setCategory(option);
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
