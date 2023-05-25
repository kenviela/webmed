import Title from "../../components/Title/Title";
import "./New.scss";
import Header from "../../components/Header/Header";
const News = () => {
  return (
    <div className="News">
      <Header />
      <div className="News__title">
        <Title title="Noticias y expertos" />
      </div>
      <div className="News__container">
        <div className="News__container__news1">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/55F3IJ65R5HDHEC3GOER3J3RKE.jpg"
            alt="imagen"
          />
          <a href="https://cnnespanol.cnn.com/2023/05/23/protectores-solares-amplio-espectro-ingredientes-problematicos-informe-trax/">
            Solo el 25 % de los protectores solares ofrecen protección de amplio
            espectro sin ingredientes "problemáticos", según un informe
          </a>
        </div>
        <div className="News__container__news2">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/55F3IJ65R5HDHEC3GOER3J3RKE.jpg"
            alt="imagen"
          />
          <a href="https://cnnespanol.cnn.com/2023/05/22/bueno-malo-feo-medir-indice-masa-corporal-imc-trax/">
            Lo bueno, lo malo y lo feo de medir el índice de masa corporal, IMC
          </a>
        </div>
        <div className="News__container__news3">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/55F3IJ65R5HDHEC3GOER3J3RKE.jpg"
            alt="imagen"
          />
          <a href="https://cnnespanol.cnn.com/2023/05/21/dia-internacional-te-beber-te-ayudar-crisis-trax/">
            Día internacional del té: ¿por qué beber té podría ayudar en una
            crisis?
          </a>
        </div>
      </div>
    </div>
  );
};
export default News;
