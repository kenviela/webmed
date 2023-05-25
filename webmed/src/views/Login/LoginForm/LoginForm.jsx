import { useState } from "react";
import Input from "../../../components/Input/Index";
import "./LoginForm.scss";
const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleOnChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
  };
  return (
    <form className="LoginForm" onSubmit={handleOnClick}>
      <Input
        type="email"
        name="email"
        labelText="Correo"
        onChange={handleOnChangeEmail}
      />
      <Input
        type="password"
        name="password"
        labelText="Contraseña"
        onChange={handleOnChangePassword}
      />
      <input
        type="submit"
        value="Iniciar sesión"
        className="LoginForm__submit"
      />
    </form>
  );
};

export default LoginForm;
