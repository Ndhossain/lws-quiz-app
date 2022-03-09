import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Results() {
  const { state } = useLocation();
  const { qna } = state;
  const { id } = useParams();

  const { loading, error, answers } = useAnswers(id);

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error</div>}
      {answers && (answers.length > 0) &&
          (
            <>
              <Summary />
              <Analysis />
            </>
          )}
    </>
  );
}
