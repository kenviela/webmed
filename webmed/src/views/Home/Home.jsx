import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";

import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home__title">
        <Title title="Bienvenido a Webmed" />
      </div>
      <div className="Home__buttons">
        <Link to="/login">
          <button>Iniciar sesión</button>
        </Link>
        <Link to="/signup">
          <button>Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
