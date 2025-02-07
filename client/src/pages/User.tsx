import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/store";
import argentBankLogo from "../img/argentBankLogo.png";
import { useEffect, useState } from "react";
import { logout } from "../services/authSlice";

interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default function User() {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<ProfileData>();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          dispatch(logout());
          navigate("/login");
        }

        const data = await response.json();
        setUserData(data.body);
        return data;
      } catch (error) {
        console.error("Error:", error);
        dispatch(logout());
        navigate("/login");
      }
    };

    verifyToken();
  }, [token, dispatch, navigate]);

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
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {userData && `${userData.firstName} ${userData.lastName}`}
          </Link>
          <button
            className="main-nav-item cursor-pointer"
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData && `${userData.firstName} ${userData.lastName} !`}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
