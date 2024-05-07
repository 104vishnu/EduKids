// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import "./Login.scss";

// // function Login() {

// //   const navigate = useNavigate();
// //   const [credentials, setCredentials] = useState({
// //     email: "",
// //     password: ""
// //   });

// //   const [error, setError] = useState("");

// //   const handleChange = (e) => {
// //     setCredentials((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:5000/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify(credentials)
// //       });

// //       console.log("response",response);

// //       if (response.ok) {
// //         console.log("Login successful");

// //         localStorage.setItem("currentUser", JSON.stringify(response.data));
// //         // Optionally, redirect to another page or perform additional actions
// //         navigate("/");
// //       } else {
// //         const data = await response.json();
// //         setError(data.error || "Login failed");
// //       }
// //     } catch (error) {
// //       console.error("Error during login:", error);
// //       setError("Login failed");
// //     }
// //   };

// //   return (
// //     <div className="login">
// //       <div className="login-form">
// //         <h1 className="login-heading">Login to Your Account</h1>
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="email">Email </label>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Enter your Email"
// //             onChange={handleChange}
// //           />

// //           <label htmlFor="password">Password </label>
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             onChange={handleChange}
// //           />
// //           {error && <div className="error">{error}</div>}
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.scss";
// import newRequest from "../../utils/newRequest.js";

// function Login() {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: ""
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setCredentials((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await newRequest.post("v1/auth/login", credentials);

//       if (response.ok) {
//         console.log("Login successful");
//         localStorage.setItem("currentUser", JSON.stringify(response.data));
//         navigate("/");
//       } else {
//         const data = await response.json();
//         setError(data.error || "Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("Login failed");
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login-form">
//         <h1 className="login-heading">Login to Your Account</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your Email"
//             onChange={handleChange}
//           />
//           <label htmlFor="password">Password </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             onChange={handleChange}
//           />
//           {error && <div className="error">{error}</div>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest.js';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      const res = await newRequest.post("/v1/auth/login", { email, password });
      console.log("res",res);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log('login complete');
      navigate("/home");
    } catch (err) {
      console.log('error in login frontend page ');
    }
  };

  return (
    <div className="login">
      <div className="loginA">
        <img src="images/nittlogo.png" alt="" />
        <h1>Login</h1>
      </div>

      <div className="loginB">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">LOGIN</button>
        </form>
        <p> Not a member? <span>Register Now</span> </p>
      </div>
    </div>
  );
}

export default Login;
