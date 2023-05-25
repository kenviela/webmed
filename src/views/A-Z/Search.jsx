import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";
import Header from "../../components/Header/Header";
import "./Search.scss";

const enfermedades = [
  {
    nombre: "Resfriado común",
    descripcion:
      "Infección viral del sistema respiratorio superior que causa congestión nasal, estornudos, dolor de garganta y tos.",
    sintomas: ["Congestión nasal", "Estornudos", "Dolor de garganta", "Tos"],
  },
  {
    nombre: "Gripe (Influenza)",
    descripcion:
      "Infección viral que afecta el sistema respiratorio y puede causar fiebre, dolores musculares, fatiga, dolor de cabeza y tos.",
    sintomas: [
      "Fiebre",
      "Dolores musculares",
      "Fatiga",
      "Dolor de cabeza",
      "Tos",
    ],
  },
  {
    nombre: "Bronquitis",
    descripcion:
      "Inflamación de los bronquios que puede ser causada por infecciones virales o bacterianas, y provoca tos persistente y dificultad para respirar.",
    sintomas: [
      "Tos persistente",
      "Dificultad para respirar",
      "Producción de esputo",
    ],
  },
  {
    nombre: "Enfermedad cardiovascular",
    descripcion:
      "Enfermedades del corazón y los vasos sanguíneos que pueden causar dolor en el pecho, dificultad para respirar y fatiga.",
    sintomas: ["Dolor en el pecho", "Dificultad para respirar", "Fatiga"],
  },
  {
    nombre: "Diabetes",
    descripcion:
      "Enfermedad crónica caracterizada por niveles elevados de azúcar en la sangre, que puede causar sed excesiva, pérdida de peso y fatiga.",
    sintomas: ["Sed excesiva", "Pérdida de peso", "Fatiga"],
  },
  {
    nombre: "Enfermedad de Alzheimer",
    descripcion:
      "Enfermedad neurodegenerativa que causa deterioro cognitivo y pérdida de la memoria a largo plazo.",
    sintomas: [
      "Pérdida de memoria",
      "Confusión",
      "Dificultad para realizar tareas cotidianas",
    ],
  },
  {
    nombre: "Artritis",
    descripcion:
      "Inflamación de las articulaciones que causa dolor, rigidez y dificultad para moverse.",
    sintomas: [
      "Dolor en las articulaciones",
      "Rigidez",
      "Dificultad para moverse",
    ],
  },
  {
    nombre: "Enfermedad pulmonar obstructiva crónica (EPOC)",
    descripcion:
      "Enfermedad pulmonar crónica que provoca dificultad para respirar, tos crónica y producción excesiva de esputo.",
    sintomas: [
      "Dificultad para respirar",
      "Tos crónica",
      "Producción excesiva de esputo",
    ],
  },
  {
    nombre: "Enfermedad del hígado graso no alcohólico (EHGNA)",
    descripcion:
      "Acumulación de grasa en el hígado que puede provocar inflamación, cicatrización y daño hepático.",
    sintomas: [
      "Fatiga",
      "Dolor en el abdomen superior derecho",
      "Hinchazón abdominal",
    ],
  },
  {
    nombre: "Trastorno de ansiedad",
    descripcion:
      "Trastorno mental caracterizado por preocupación y miedo excesivos, acompañado de síntomas como inquietud, dificultad para concentrarse y problemas para conciliar el sueño.",
    sintomas: [
      "Preocupación excesiva",
      "Inquietud",
      "Dificultad para concentrarse",
    ],
  },
  {
    nombre: "Enfermedad renal crónica",
    descripcion:
      "Daño progresivo e irreversible a los riñones, lo que resulta en una disminución de la función renal y la acumulación de toxinas en el cuerpo.",
    sintomas: [
      "Fatiga",
      "Hinchazón en las piernas y tobillos",
      "Aumento de la frecuencia urinaria",
    ],
  },
];

const SearchDisease = () => {
  const [filterData, setFilterData] = useState([]);
  console.log({ filterData });
  const handleFilter = (parteString) => {
    const coincidencias = [];

    for (let i = 0; i < enfermedades.length; i++) {
      const enfermedad = enfermedades[i];
      const nombreEnfermedad = enfermedad.nombre.toLowerCase();

      if (nombreEnfermedad.includes(parteString.toLowerCase())) {
        coincidencias.push(enfermedad);
      }
    }

    return setFilterData(coincidencias);
  };
  return (
    <div className="SearchDisease">
      <Header />
      <div className="SearchDisease__title">
        <Title title="Salud A-Z" />
      </div>
      <div className="SearchDisease__searchBar">
        <SearchBar handleFilter={handleFilter} />
      </div>
      <div className="SearchDisease__table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>sintomas</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((enfermedad) => {
              return (
                <tr>
                  <td>{enfermedad.nombre}</td>
                  <td>{enfermedad.sintomas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchDisease;
