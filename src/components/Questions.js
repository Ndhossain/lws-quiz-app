import Answers from "./Answers";
import classes from "./styles/Question.module.css";
export default function Questions({ answers }) {
  return answers.map((answer, indexes) => (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers options={answer.options} input={false} />
    </div>
  ));
}
