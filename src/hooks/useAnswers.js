import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const answerRef = ref(db, `answers/${videoID}/questions`);
      const answerQuery = query(answerRef, orderByKey());
      console.log(answerQuery);

      try {
        setError(false);
        setLoading(true);

        // firebase database
        const snapshot = await get(answerQuery);
        setLoading(false);
        console.log(snapshot);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
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
    answers,
  };
}
