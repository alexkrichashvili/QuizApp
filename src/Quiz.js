import { useEffect, useState } from 'react';
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
     const [answers, setAnswers] = useState({});
     const [score, setScore] = useState(0);

     useEffect(() => {
          const params = {
               amount: DEFAULT_NUMBER_OF_QUESTIONS,
          };

          const [categoryLable, categoryId] = category;

          if (categoryLable !== ANY_CATEGORY) {
               params.category = categoryId;
          }

          if (difficulty !== ANY_DIFFICULITY) {
               params.difficulty = difficulty && difficulty.toLowerCase();
          }

          return axios.get(API_URL, { params }).then(response => {
               const randomizedQuestions = response.data.results.map(
                    question => {
                         const correctAnswerIndex = Math.round(
                              Math.random() *
                                   (question.incorrect_answers.length + 1)
                         );

                         const randomizedAnswers = [
                              ...question.incorrect_answers,
                         ];
                         randomizedAnswers.splice(
                              correctAnswerIndex,
                              0,
                              question.correct_answer
                         );

                         return {
                              ...question,
                              randomizedAnswers,
                         };
                    }
               );

               setQuestions(randomizedQuestions);
          });
     }, [difficulty, category]);

     function handleSubmit() {
          let resultScore = 0;
          questions.forEach((question, index) => {
               resultScore += answers[`answer_${index}`] ? 1 : 0;
          });

          setScore(resultScore);
     }

     function hanleReset() {
          setScore(0);
          setAnswers({});
     }

     return (
          <form>
               {questions?.map((question, index) => (
                    <>
                         <div
                              className={styles.question}
                              dangerouslySetInnerHTML={{
                                   __html: `${index + 1} ${question.question}`,
                              }}
                         />
                         {question.randomizedAnswers.map(answer => (
                              <div className={styles.answer}>
                                   <input
                                        onChange={event => {
                                             if (
                                                  event.target.value ===
                                                  question.correct_answer
                                             ) {
                                                  setAnswers({
                                                       ...answers,
                                                       [`answer_${index}`]: true,
                                                  });
                                             } else {
                                                  setAnswers({
                                                       ...answers,
                                                       [`answer_${index}`]: false,
                                                  });
                                             }
                                        }}
                                        type="radio"
                                        name={`answer_${index}`}
                                        value={answer}
                                   />
                                   <label htmlFor="answer">{answer}</label>
                              </div>
                         ))}
                    </>
               ))}
               <div>
                    {questions && (
                         <div className={styles.score}>
                              {score}/{questions.length}
                         </div>
                    )}
                    <div>
                         <input
                              className={styles.resetBtn}
                              onClick={hanleReset}
                              type="reset"
                              value="Reset"
                         />
                         <input
                              className={styles.submitBtn}
                              type="button"
                              value="Submit"
                              onClick={handleSubmit}
                         />
                    </div>
               </div>
          </form>
     );
}
