import Title from "../../components/Title/Title";
import Input from "../../components/Input/Index";
import Header from "../../components/Header/Header";
import "./Pay.scss";
import { useEffect, useState } from "react";
const Swal = require("sweetalert2");
const PayForm = () => {
  const [pay, setPay] = useState(0);
  const [name, setName] = useState("");
  const [numCreditCard, setNumCreditCard] = useState("");
  const valueRandom = () => {
    let numberRandom = Math.random() * 1000000;
    let numShort = Math.round(numberRandom);
    return setPay(numShort);
  };

  useEffect(() => {
    valueRandom();
  }, []);

  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangeCreditCard = (event) =>
    setNumCreditCard(event.target.value);

  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      name,
      numCreditCard,
      pay,
    };
    if (name && numCreditCard) {
      Swal.fire({
        title: "Gracias",
        text: "Gracias por la compra, te llegara un correo con toda la información de entrega",
        icon: "success",
        confirmButtonText: "ok",
      });
    }
    console.log(data);
  };
  return (
    <form className="PayForm" onSubmit={handleOnClick}>
      <Input
        type="text"
        name="name"
        labelText="Nombre completo"
        onChange={handleOnChangeName}
      />
      <Input
        type="Number"
        name="creditCard"
        labelText="Número de tarjeta de credito"
        onChange={handleOnChangeCreditCard}
      />
      <Input
        type="number"
        name="valorTotal"
        disabled
        value={pay}
        labelText="total a pagar"
      />
      <input type="submit" value="Pagar" className="PayForm__submit" />
    </form>
  );
};
const Pay = () => {
  return (
    <div className="Pay">
      <Header />
      <div className="Pay__title">
        <Title></Title>
      </div>
      <div>
        <Title title="Pagos" />
      </div>
      <PayForm />
    </div>
  );
};

export default Pay;
