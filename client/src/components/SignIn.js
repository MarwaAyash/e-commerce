// import React from "react";
// import styled from "styled-components";

// import { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// //import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
// //import { useAuthState } from "react-firebase-hooks/auth";
// // import "./Login.css";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const [user, loading, error] = useAuthState(auth);
//   const navigate = useHistory();
//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);

//   return (
//     <Login>
//       <LoginContainer>
//         <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <Button
//           onClick={() => signInWithEmailAndPassword(email, password)}
//         >
//           Login
//         </Button>

//         <Button onClick={signInWithGoogle}>
//           Login with Google
//         </Button>

//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>
//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div>
//       </LoginContainer>
//     </Login>
//   );
// }
// // export default Login;


// const Login = styled.div`
//     height: 100vh;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   `

// const LoginContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     background-color: #dcdcdc;
//     padding: 30px;
// `
// //   .login__textBox
// //     padding: 10px;
// //     font-size: 18px;
// //     margin-bottom: 10px;
  
//   const Button = styled.button`
//     padding: 10px;
//     font-size: 18px;
//     margin-bottom: 10px;
//     border: none;
//     color: white;
//     background-color: black;
//   `


// export default SignIn;


// //   .login__google {
// //     background-color: #4285f4;
// //   }
// //   .login div {
// //     margin-top: 7px;
// //   }

