import { useCallback, useEffect, useState, useMemo } from 'react';
import styles from './Quiz.module.css';
import axios from 'axios';
import {
     API_URL,
     DEFAULT_NUMBER_OF_QUESTIONS,
     ANY_CATEGORY,
     ANY_DIFFICULITY,
} from './constants';

export default function Quiz({ category, difficulty }) {
     const [questions, setQuestions] = useState();
     const [score, setScore] = useState();

     const quizesUrl = useMemo(() => {
          const urlSearchParams = new URLSearchParams({
               amount: DEFAULT_NUMBER_OF_QUESTIONS,
          });

          const [categoryLable, categoryId] = category;

          if (categoryLable !== ANY_CATEGORY) {
               urlSearchParams.set('category', categoryId);
          }

          if (difficulty !== ANY_DIFFICULITY) {
               urlSearchParams.set('difficulty', difficulty);
          }

          const queryString = urlSearchParams.toString();

          return `${API_URL}?${queryString}`;
     }, [difficulty, category]);

     useEffect(
          () =>
               axios
                    .get(quizesUrl)
                    .then(response => setQuestions(response.data.results)),
          [quizesUrl]
     );

     const getRandomlyOrderedAnswers = useCallback(question => {
          const correctAnswerIndex = Math.round(
               Math.random() * (question.incorrect_answers.length + 1)
          );

          console.log({ correctAnswerIndex });
          const answers = [...question.incorrect_answers];
          answers.splice(correctAnswerIndex, 0, question.correct_answer);

          return answers;
     }, []);

     return (
          <div>
               {questions?.map((question, index) => (
                    <>
                         <div className={styles.question}>
                              {index + 1}. {'' + question.question}
                         </div>
                         {getRandomlyOrderedAnswers(question).map(answer => (
                              <div className={styles.answer}>
                                   <input
                                        // onChange={event =>
                                        //      if(event.target.value === questions[index].correct_answer) {

                                        //      }
                                        // }
                                        type="radio"
                                        name={`answer_${index}`}
                                        value={answer}
                                   />
                                   <label htmlFor="answer">{answer}</label>
                              </div>
                         ))}
                    </>
               ))}
          </div>
     );
}
