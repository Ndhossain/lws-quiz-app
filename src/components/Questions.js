import Answers from "./Answers";
import classes from "./styles/Question.module.css";
export default function Questions({ answers }) {
  return answers.map((answer, indexes) => (
    <div className={classes.question} key={indexes}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers options={answer.options} input={false} />
    </div>
  ));
}
