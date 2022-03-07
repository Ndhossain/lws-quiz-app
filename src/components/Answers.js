import CheckBox from "./CheckBox";
import classes from "./styles/Answers.module.css";

export default function Answers({ options = [], handleChange }) {
  console.log("component rendered");
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          text={option.title}
          className={classes.answer}
          value={index}
          onChange={(e) => handleChange(e, index)}
          checked={option.checked}
          key={index}
        />
      ))}
    </div>
  );
}
