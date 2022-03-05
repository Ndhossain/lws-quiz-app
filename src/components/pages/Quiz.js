import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestionList from "../../hooks/useQuestionList";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
console.log(useQuestionList);

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
  const [currentQusestion, setCurrenetQuestion] = useState();
  const { id } = useParams();
  const { loading, error, questions } = useQuestionList(id);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  console.log(qna);

  return (
    <>
      <h1>{qna[currentQusestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
