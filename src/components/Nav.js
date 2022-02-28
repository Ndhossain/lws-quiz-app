import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import classes from "./styles/Nav.module.css";

export default function Nav() {
  const value = "logo";
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt={value.toString()}></img>
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
