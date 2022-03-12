import Image from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "./styles/Summary.module.css";
export default function Summary({ score, noq }) {
  const getKeyWord = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "better";
    } else {
      return "best";
    }
  };
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyWord()}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : Image;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div>Loading Your Badge...</div>}
      {error && <div>An error occured</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
