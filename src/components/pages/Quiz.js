import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestionList from "../../hooks/useQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

export default function Quiz() {
  const [currentQusestion, setCurrenetQuestion] = useState(0);
  const { id } = useParams();
  const { loading, error, questions } = useQuestionList(id);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQusestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQusestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQusestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
