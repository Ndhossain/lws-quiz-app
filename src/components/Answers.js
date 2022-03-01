import CheckBox from "./CheckBox";
import classes from "./styles/Answers.module.css";

export default function Answers() {
  return (
    <div pr={classes.answers}>
      <CheckBox text="Answer1" className={classes.answer} type="checkbox" />
    </div>
  );
}
