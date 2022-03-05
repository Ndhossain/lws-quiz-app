import { useState, useReducer } from "react";
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
      
      break;
  
    default:
      break;
  }
}

export default function Quiz() {
  const [currentQusestion, setCurrenetQuestion] = useState();
  const { id } = useParams();
  const { loading, error, questions } = useQuestionList(id);

  const [qna, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
