import { Container, ContentContainer, GoBackButton, Header, TitleText } from "./styles";
import { HeaderImage } from "../Home/assets";
import React from "preact/compat";
import { useCallback } from "preact/hooks";
import { Form } from "./components/Form";
import { createContactService } from "../../shared/services/contacts/createContactService";
import { FormDataType } from "./components/Form/types";

const AddContact: React.FC = () => {
  const onInput = useCallback(
   async (data: FormDataType) => {      
      try {
        await createContactService(data);
      } catch (error) {
        console.error(error)
      }
    }, []
  );

  return (
    <Container>
      <Header src={HeaderImage}/>
      <ContentContainer>
        <GoBackButton>{'<-'} Voltar</GoBackButton>
        <TitleText>Novo contato</TitleText>
        <Form onSubmit={onInput} />
      </ContentContainer>
    </Container>
  );
}

export {AddContact}