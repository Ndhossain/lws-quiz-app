import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Results() {
  const { state } = useLocation();
  console.log(useLocation())
  console.log(state);
  const { qna } = state;
  const { id } = useParams();
  console.log(id);
  console.log(useAnswers(id))

  const { loading, error, answers } = useAnswers(id);
  console.log(error);
  console.log(loading);
  console.log(answers);

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error</div>}
      {answers &&
        answers.length >
          0(
            <>
              <Summary />
              <Analysis />
            </>
          )}
    </>
  );
}
