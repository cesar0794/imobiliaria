import React, { Fragment, useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb,
} from "./styles";
import TopBanner from "../../components/TopBanner";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Api, { urlApi } from "../../services/Api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Imobi2 = () => {
  const { slug } = useParams();
  const [dataimobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((response) => {
        setDataImobi(response.data);
      })
      .catch(() => {
        console.log("Erro: erro ao listar imovel");
      });
  });

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    name,
    email,
    userId,
    telefone,
  } = dataimobi;

  return (
    <Fragment>
      <TopBanner tipo={tipo} descricao={descricao} thumb={thumb} />

      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`} alt="" />
          </Thumb>

          <Description>
            <h2>{tipo}</h2>
            <h5>Cidade: {cidade}</h5>
            <h5>Endereço: {endereco}</h5>
            <p>{descricao}</p>
          </Description>
        </Left>

        <Right>
          <Profile>
            <ProfileImg>
              <img
                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
              />
            </ProfileImg>

            <h3>{name}</h3>
            <p>Descrição do usuário</p>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>{telefone}</p>
            <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
              <Input type="text" placeholder="Nome:" />
              <Input type="text" placeholder="E-mail" />
              <TextArea placeholder="Mensagem"></TextArea>
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi2;
