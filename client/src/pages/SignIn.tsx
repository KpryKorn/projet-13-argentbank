import { useDispatch } from "react-redux";
import argentBankLogo from "../img/argentBankLogo.png";
import { login } from "../services/api";
import { loginFailure, loginSuccess } from "../services/authSlice";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const email = emailInput?.value.trim();
    const password = passwordInput?.value;

    if (!email || !password) {
      console.error("Email et/ou mot de passe manquant");
      return;
    }

    try {
      const data = await login(email, password);
      dispatch(loginSuccess(data.body.token));
      navigate("/profile");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      setErrorMessage(error.message);
      console.error("Erreur lors de la connexion :", error);
    }
  };
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="border-black border" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border-black border"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button cursor-pointer">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
