import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestionList(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${videoID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        // firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuiz) => {
            return [...prevQuiz, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestion();
  }, [videoID]);
  return {
    loading,
    error,
    questions,
  };
}
