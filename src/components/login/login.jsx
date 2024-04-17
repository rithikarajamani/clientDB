import React from "react";
import "./login.css";
import { useState, useEffect, useRef } from "react";
import postApi from "../../api/loginapi";
import Table from "../table/table";
import { Link, useNavigate } from "react-router-dom";
import { useFont } from "../fonts/fontContext";
function Login() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const fontStyles = useFont();
  const userRef = useRef();
  const passRef = useRef();
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: userRef.current?.value,
      password: passRef.current?.value,
    };

    if (user.username == "" || user.password == "") {
      console.log("Please Enter valid credentials");
      return;
    }

    setAuth(await postApi(user));
  };
  useEffect(() => {
    if (auth === true) {
      navigate("/table");
    } else {
      navigate("/login");
    }
    console.log(auth);
  }, [auth]);

  return (
    <>
      <div className="main-conatainer" style={fontStyles}>
        <div className="login-content">
          <h2 style={{ fontFamily: "Poppins-Bold" }}>CLIENT DB</h2>
          <p style={{ fontFamily: "Poppins-Thin" }}>
            Welcome back!Enter your creadentials to Login.
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="  Username or Email"
                ref={userRef}
                style={{
                  width: "350px",
                  height: "40px",
                  fontFamily: "Poppins-Thin",
                }}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="  Password"
                ref={passRef}
                style={{
                  width: "350px",
                  height: "40px",
                  fontFamily: "Poppins-Thin",
                }}
                required
              />
            </div>
            <div>
              <button
                className="login-btn"
                style={{
                  fontFamily: "Poppins-Thin",
                  height: "23px",
                  width: "130px",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="img_container">
          {/* <img src="" alt="Logo" width="600px" height="600px"></img> */}
        </div>
      </div>
    </>
  );
}
export default Login;
