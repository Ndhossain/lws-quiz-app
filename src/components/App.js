import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Login />} />

            <Route path="/quiz" element={<Quiz />} />

            <Route path="/results" element={<Results />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
