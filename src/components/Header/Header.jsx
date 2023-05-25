import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <div className="Header__title">
        <h1>Webmed</h1>
      </div>
      <div className="Header__menu">
        <Link to="/dashboard">incio</Link>
        <Link to="/finances">finanzas</Link>
        <Link to="/disease">A-Z</Link>
        <Link to="/resource">recursos</Link>
        <Link to="/medicine">Medicamentos y suplementos</Link>
        <Link to="/pay">Pagos</Link>
        <Link to="/news">Noticias y expertos</Link>
        <Link to="/comments">comentarios</Link>
      </div>
      <svg
        className="Header__user"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person"
        viewBox="0 0 16 16"
        onClick={() => {
          localStorage.setItem("login", 0);
          localStorage.setItem("signup", 0);
          navigate("/");
        }}
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
      </svg>
    </header>
  );
};

export default Header;
