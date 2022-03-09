import Button from "./Button";
import classes from "./styles/ProgressBar.module.css";
import {useRef, useState} from "react"

export default function ProgressBar({ next, prev, progress, submit }) {
  const [tooltip, setToolTip] = useState(false);

  const tooltipRef = useRef()

  function toggleToolTip() {
    if (tooltip) {
      setToolTip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setToolTip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  }
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleToolTip}
            onMouseOut={toggleToolTip}
          ></div>
        </div>
      </div>
      <Button className={classes.next} onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? 'Submit' : 'Next Question'}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
