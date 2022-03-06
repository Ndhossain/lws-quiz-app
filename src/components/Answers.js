import CheckBox from "./CheckBox";
import classes from "./styles/Answers.module.css";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          text={option.title}
          className={classes.answer}
          value={index}
          onChange={(e) => handleChange(e, index)}
          type="checkbox"
          key={index}
        />
      ))}
    </div>
  );
}
