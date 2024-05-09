

// // import React, { useState } from "react";
// // import "./Register.scss";
// // import { Link, useNavigate } from "react-router-dom";

// // function Register() {
// //   const navigate = useNavigate();

// //   const [user, setUser] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     phone: "",
// //     cnfpassword:""
// //   });

// //   const handleChange = (e) => {
// //     setUser((prev) => {
// //       return { ...prev, [e.target.name]: e.target.value };
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {

// //       if(user.password != user.cnfpassword)
// //       {
// //         alert("Password Not matched")
// //         return;
// //       }
// //       const response = await fetch("http://localhost:5000/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify(user)
// //       });
// //       if (response.ok) {
// //         console.log("Registration successful");
// //         // Optionally, redirect to another page or show a success message
// //         navigate("/");
// //       } else {
// //         console.error("Registration failed");
// //         // Handle registration failure, show error message, etc.
// //       }
// //     } catch (error) {
// //       console.error("Error during registration:", error);
// //       // Handle error, show error message, etc.
// //     }
// //   };

// //   return (
// //     <div className="register">
// //       <div className="registerhead">
// //         <h1 className="heading">Register for Learn</h1>
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="username">Username </label>
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             onChange={handleChange}
// //           />

// //           <label htmlFor="email">Email </label>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="abc@gmail.com"
// //             onChange={handleChange}
// //           />

// //           <label htmlFor="phoneno">Phone</label>
// //           <input
// //             type="text"
// //             name="phone"
// //             placeholder="9113...."
// //             onChange={handleChange}
// //           />

// //           <label htmlFor="password">Password </label>
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Enter password"
// //             onChange={handleChange}
// //           />

// // <label htmlFor="cnfpassword">Confirm Password </label>
// //           <input
// //             type="password"
// //             name="cnfpassword"
// //             placeholder="confirm password"
// //             onChange={handleChange}
// //           />

// //           <button type="submit">Register</button>
// //           <p>Already a member? <Link to="/">Login here</Link></p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.scss";

// function Register() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     phone: "",
//     cnfpassword: ""
//   });

//   const handleChange = (e) => {
//     setUser((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (user.password !== user.cnfpassword) {
//         alert("Password Not matched");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//       });
//       if (response.ok) {
//         console.log("Registration successful");
//         navigate("/");
//       } else {
//         console.error("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="register">
//       <div className="registerhead">
//         <h1 className="heading">Register for Learn</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={handleChange}
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="abc@gmail.com"
//             onChange={handleChange}
//           />

//           <label htmlFor="phoneno">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             placeholder="9113...."
//             onChange={handleChange}
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             onChange={handleChange}
//           />

//           <label htmlFor="cnfpassword">Confirm Password</label>
//           <input
//             type="password"
//             name="cnfpassword"
//             placeholder="confirm password"
//             onChange={handleChange}
//           />

//           <button type="submit">Register</button>
//           <p>
//             Already a member? <Link to="/">Login here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import newRequest from "../../utils/newRequest.js";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Password and Confirm Password must match");
        return;
      }

      await newRequest.post("/v1/auth/register", {
        username,
        email,
        phone,
        password
      });

      navigate("/");
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <div className="register" style={{backgroundImage: "url('./img/c.png')"}}>
  

      <div className="registerhead">
        <h1 className="heading">Register for Learn</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phoneno">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="9113...."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="cnfpassword">Confirm Password</label>
          <input
            type="password"
            name="cnfpassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>
            Already a member? <Link to="/">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
