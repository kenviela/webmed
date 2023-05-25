import "./SignupForm.scss";
import { useState, useEffect } from "react";
import Input from "../../../components/Input/Index";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [validation, setValidation] = useState({});
  const [signup] = useState(() => {
    return localStorage.getItem("signup");
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (signup === "1") {
      navigate("/finances");
    }
  }, [signup, navigate]);
  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangePassword = (event) => setPassword(event.target.value);
  const handleChangeConfirmPassword = (event) =>
    setConfirmPassword(event.target.value);
  const handleOnChangeEmail = (event) => setEmail(event.target.value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 5) {
      return setValidation({
        password: { message: "la contraseña debe ser mayor a 5 caracteres" },
      });
    }
    if (password !== confirmPassword) {
      return setValidation({
        confirmPassword: { message: "la contraseña es diferente" },
      });
    }
    const data = {
      name,
      password,
      confirmPassword,
      email,
    };
    localStorage.setItem("signup", 1);
    navigate("/finances");
    console.log(data);
  };
  return (
    <form className="SignupForm" onSubmit={handleOnSubmit}>
      <Input
        name="name"
        type="text"
        labelText="Nombre"
        onChange={handleOnChangeName}
      />
      <Input
        name="password"
        type="password"
        labelText="Contraseña"
        onChange={handleOnChangePassword}
        error={validation.password}
      />
      <Input
        name="confirmPassword"
        type="password"
        labelText="Verificar contraseña"
        onChange={handleChangeConfirmPassword}
        error={validation.confirmPassword}
      />
      <Input
        name="email"
        type="email"
        labelText="Correo"
        onChange={handleOnChangeEmail}
      />
      <input type="submit" value="Registrarse" className="SignupForm__submit" />
    </form>
  );
};

export default SignupForm;
