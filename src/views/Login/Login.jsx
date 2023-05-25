import Title from "../../components/Title/Title";
import LoginForm from "./LoginForm/LoginForm";
import "./Login.scss";
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
        <a href="../Signup">no tienes cuenta? registrate aquí</a>
      </div>
    </div>
  );
};

export default Login;
