import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import classes from "./styles/Login.module.css";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(userEmail, userPassword);
      navigator("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Email & Password can't match with database");
    }
  }

  return (
    <>
      <Form className={`${classes.login}`} onSubmit={handleSubmit}>
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
        <Button disabled={loading} type="submit">
          <span>SUBMIT NOW</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link>to.
        </div>
      </Form>
    </>
  );
}
