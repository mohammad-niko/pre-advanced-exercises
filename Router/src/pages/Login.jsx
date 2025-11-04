import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const navigateHook = useNavigate();
  const { isAuthenticated, isLogin } = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }
  function handleLogin() {
    isLogin();
   
    navigateHook(from, { replace: true });
  }

  return (
    <>
      <h2>Login page</h2>
      <button onClick={handleLogin}>login</button>
    </>
  );
}

// function Login() {
//   const navigate = useNavigate();

//   function handleLogin() {
//     navigate("/",{replace:true});
//   }

//   function handleBack() {
//     navigate(-1)
//   }
//   return (
//     <>
//       <h2>Login page</h2>
//       <button onClick={handleLogin}>login</button>
//       <button onClick={handleBack}>back</button>
//     </>
//   );
// }

export default Login;
