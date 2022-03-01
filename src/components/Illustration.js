import classes from "./styles/Illustration.module.css";

export default function Illustration({ Image }) {
  return (
    <div className={classes.illustration}>
      <img src={Image} alt="Signup" />
    </div>
  );
}
