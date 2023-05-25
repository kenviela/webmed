import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import "./Finances.scss";
import { Link } from "react-router-dom";
const Finances = () => {
  return (
    <div className="Finances">
      <Header />
      <div className="Finances__title">
        <Title title="Finanzas" />
      </div>
      <div className="Finances__option">
        <div className="Finances__option__finances">
          <svg
            className="Finances__finances__imgFinances"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <Link to="/pay">comprar seguro</Link>
          <p> compra los seguros</p>
        </div>
        <div className="Finances__option__services">
          <svg
            className="Finances__services__imgServices"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-credit-card"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
          </svg>
          <Link to="/pay">pagar servicios</Link>
          <p>paga los servicios</p>
        </div>
      </div>
    </div>
  );
};

export default Finances;
