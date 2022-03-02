import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import classes from "./styles/Signup.module.css";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setagree] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (userPassword !== confirmPassword) {
      return setError("Password Doesn't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(userEmail, userPassword, userName);
      navigator("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to submit! try again");
    }
  }

  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
      <TextInput
        required
        type="text"
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <TextInput
        required
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        required
        text="I agree to the Terms &amp; Conditions"
        type="checkbox"
        value={agree}
        onChange={(e) => setagree(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <Button disabled={loading} type="submit">
        <span>SUBMIT NOW</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
