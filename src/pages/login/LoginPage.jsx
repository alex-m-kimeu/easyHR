/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../../assets/logo.png";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [useCredentials, setUseCredentials] = useState({});
  const [error, setError] = useState("");

  const handleCredentials = (e) => {
    setUseCredentials({ ...useCredentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('accessToken', userCredential.user.accessToken)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    const handlePasswordReset = () => {
    const email = prompt("Enter your email");
    sendPasswordResetEmail(auth, email)
    alert("Password reset email sent");
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <section>
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-10 mb-4" />
          </div>
          <p className="text-center mb-4">
            Login or create an account to continue
          </p>
          <div className="flex justify-center mb-4 gap-4">
            <button
              className={`btn ${
                loginType === "login"
                  ? "bg-green text-white"
                  : "bg-gray-200 text-gray-500"
              } px-4 py-2 rounded-full font-semibold`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${
                loginType === "signup"
                  ? "bg-green text-white"
                  : "bg-gray-200 text-gray-500"
              } px-4 py-2 rounded-full font-semibold`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email *
              </label>
              <input
                type="text"
                name="email"
                onChange={(e) => {
                  handleCredentials(e);
                }}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  handleCredentials(e);
                }}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {loginType == "login" ? (
              <button
                onClick={(e) => handleLogin(e)}
                className="active btn btn-block bg-green hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            ) : (
              <button
                onClick={(e) => handleSignUp(e)}
                className="active btn btn-block bg-green hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            )}
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <p onClick={handlePasswordReset} className="forgot-password text-center text-sm text-green hover:cursor-pointer">
              Forgot Password?
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};
