// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, useHistory } from "react-router-dom";
// import styled from "styled-components";
// // import {
// //   auth,
// //   registerWithEmailAndPassword,
// //   signInWithGoogle,
// // } from "./firebase";

// // import "./Register.css";

// function Register () {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   //const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();
//   // const register = () => {
//   //   if (!name) alert("Please enter name");
//   //   registerWithEmailAndPassword(name, email, password);
//   // };
//   useEffect(() => {
//     if (loading) return;
//     if (user) history.replace("/dashboard");
//   }, [user, loading]);
//   return (
//     <Register>
//       <RegContainer>
//         <input
//           type="text"
//           className="register__textBox"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Full Name"
//         />
//         <input
//           type="text"
//           className="register__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="register__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <Button onClick={register}>
//           Register
//         </Button>
//         <Button
//           onClick={signInWithGoogle}
//         >
//           Register with Google
//         </Button>
//         <div>
//           Already have an account? <Link to="/">Login</Link> now.
//         </div>
//       </RegContainer>
//     </Register>
//   );
// }

// const Register = styled.div`
//     height: 100vh;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `  

// const RegContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     background-color: #dcdcdc;
//     padding: 30px;
//   `

// //   .register__textBox {
// //     padding: 10px;
// //     font-size: 18px;
// //     margin-bottom: 10px;
// //   }
// const Button = styled.button`
//     padding: 10px;
//     font-size: 18px;
//     margin-bottom: 10px;
//     border: none;
//     color: white;
//     background-color: black;
// `

// //   .register__google {
// //     background-color: #4285f4;
// //   }
// //   .register div {
// //     margin-top: 7px;
// //   }



// export default Register;