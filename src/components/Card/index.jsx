import React from "react"; // <-- Corrigido aqui (só o React)
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Description, Container, Img, Itens } from "./styles";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/Api";

const Card = ({ thumb, tipo, endereco, valor, slug }) => {
  return (
    <Container>
      <Img>
        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
      </Img>
      <Description>
        <h4>{tipo}</h4>

        <Itens>
          <span>
            <FaMapMarkerAlt />
            {endereco}
          </span>

          <span>R${valor}/mês</span>
        </Itens>
        <span>
          <Link to={`/imovel/${slug}`}>
            Detalhes <FaArrowRight />
          </Link>
        </span>
      </Description>
    </Container>
  );
};

export default Card;
