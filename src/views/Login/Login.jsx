import Title from "../../components/Title/Title";
import LoginForm from "./LoginForm/LoginForm";
import "./Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login">
      <div>
        <Title title="Webmed" />
      </div>
      <div className="Login__form">
        <LoginForm />
      </div>
      <div className="Login__signup">
        <Link href="../Signup">no tienes cuenta? registrate aquí</Link>
      </div>
    </div>
  );
};

export default Login;
