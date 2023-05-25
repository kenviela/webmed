import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import "./Resource.scss";
const Resource = () => {
  return (
    <div className="Resource">
      <Header />
      <div className="Resource__title">
        <Title title="Recursos" />
      </div>
      <div className="Resource__options">
        <div className="Resource__options__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-medical"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
          <a
            href="https://www.paho.org/es/hearts-americas/calculadora-riesgo-cardiovascular"
            target="_blank"
            rel="noreferrer"
          >
            calculadora de salud
          </a>
          <p> compra los seguros</p>
        </div>
        <div className="Resource__options__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <a
            href="https://espanol.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
            target="_blank"
            rel="noreferrer"
          >
            Comprobar sintomas
          </a>
          <p>paga los servicios</p>
        </div>
        <div className="Resource__options__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <a
            href="https://www.google.com/maps/search/medicos/@5.4768463,-74.7060621,13z/data=!3m1!4b1?hl=es&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Busqueda de medicos
          </a>
          <p>paga los servicios</p>
        </div>
        <div className="Resource__options__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file"
            viewBox="0 0 16 16"
          >
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
          </svg>
          <a
            href="https://www.zurichseguros.com.co/es-co/educacion-financiera/guias-de-seguros"
            target="_blank"
            rel="noreferrer"
          >
            guia de seguros
          </a>
          <p>paga los servicios</p>
        </div>
      </div>
    </div>
  );
};

export default Resource;
