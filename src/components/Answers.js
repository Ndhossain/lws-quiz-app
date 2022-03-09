import { Fragment } from "react";
import CheckBox from "./CheckBox";
import classes from "./styles/Answers.module.css";

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              text={option.title}
              className={classes.answer}
              value={index}
              onChange={(e) => handleChange(e, index)}
              checked={option.checked}
              key={index}
            />
          ) : (
            <CheckBox
              text={option.title}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              } `}
              defaultChecked={option.checked}
              key={index}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
