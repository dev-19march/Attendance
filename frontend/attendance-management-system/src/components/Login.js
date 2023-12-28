// import React, { useState } from 'react';
// import '../Css/Login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showLoginForm, setShowLoginForm] = useState(false);

//   const handleLogin = () => {
//     onLogin(username, password);
//     // Assuming successful login, you can hide the login form
//     setShowLoginForm(false);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {showLoginForm && (
//         <form>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </form>
//       )}
//       {!showLoginForm && (
//         <button onClick={() => setShowLoginForm(true)}>
//           Show Login Form
//         </button>
//       )}
//     </div>
//   );
// };

// export default Login;
