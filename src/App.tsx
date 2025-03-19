import React, { useState } from 'react';
import './App.css';
import HoverLogin from './HoverLogin.jpg';
import Google from "./Google.png";
import Facebook from "./Facebook.png";
import Apple from "./Apple.png";

const Web: React.FC = () => {
  const [showAboutUs, setShowAboutUs] = useState<boolean>(false);
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleAuthAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing up with", { username, password, confirmPassword });
    } else {
      console.log("Logging in with", { username, password });
    }
  };

  return (
    <div id="Body">
      {/* Header (Always Visible) */}
      <header>
        <p id="Logo">PLANORAMA</p>
        <ul>
          <li>
            <button
              onClick={() => setShowAboutUs(!showAboutUs)}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "inherit",
              }}
            >
              {showAboutUs ? "Back to Login" : "About Us"}
            </button>
          </li>
        </ul>
      </header>

      {/* About Us Section (Toggled) */}
      {showAboutUs ? (
        <div id="AboutUs">
          <h1>Organization</h1>
          <div className="Profiles">
            <div className="Solo">
              <h1>Ugalde, Ednest Lyner C.</h1>
              <img src=" " alt=" " />
              <div className="Details">
                <p>Role: Designer/Documentation</p>
                <p>Email: ednestlynercugalde@gmail.com</p>
                <p>Contact: </p>
              </div>
            </div>

            <div className="Solo">
              <h1>Galauran Jr., Mariano R.</h1>
              <img src=" " alt=" " />
              <div className="Details">
                <p>Role: Full Stack App Developer, Back-End Web Developer</p>
                <p>Email: mariano1220@gmail.com</p>
                <p>Contact: </p>
              </div>
            </div>

            <div className="Solo">
              <h1>Divina, John Jordan E.</h1>
              <img src=" " alt=" " />
              <div className="Details">
                <p>Role: Front-End Web Developer</p>
                <p>Email: johnjordandivina@gmail.com</p>
                <p>Contact: 09055773519</p>
              </div>
            </div>

            <div className="Solo">
              <h1>Reyes, Benedict</h1>
              <img src=" " alt=" " />
              <div className="Details">
                <p>Role: Researcher</p>
                <p>Email: </p>
                <p>Contact: </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Sign Up / Login Section (Toggled) */
        <div id="SignUp">
          <div className="image" style={{ order: isSwapped ? 2 : 1 }}>
            <img src={HoverLogin} alt="Login" />
          </div>

          <div className="SideForm" style={{ order: isSwapped ? 1 : 2 }}>
            <div className={`form ${isSignUp ? "sign-up" : "sign-in"}`}>
              <form onSubmit={handleAuthAction}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {isSignUp && (
                  <>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </>
                )}

                <div className="or-divider"><span>or</span></div>

                <div className="social-login">
                  <img src={Google} alt="Google" />
                  <img src={Facebook} alt="Facebook" />
                  <img src={Apple} alt="Apple" />
                </div>

                <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
              </form>

              <p>
                {isSignUp ? "Already have an account?" : "No Account Yet?"}
                <span
                  className="swapText"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setIsSwapped(!isSignUp);
                  }}
                >
                  {" "}{isSignUp ? "Sign In" : "Sign Up"}
                </span> now.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Web;
