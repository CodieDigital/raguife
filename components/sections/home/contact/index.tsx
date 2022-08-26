import { useRef, useState } from "react";
import router from "next/router";

import { api } from "src/services/api";

import { Container, ButtonComponent } from "components/data/components";
import {
  Form,
  FormHandles,
  YupValidation,
  InputComponent,
  TextAreaComponent,
} from "components/inputs/core";

import { ContactStyle } from "./styles";
import { LinksContato } from "components/data/links-page-contact";

interface SubmitProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface ContatoProps {
  linksContato?: boolean;
}

export function ContactComponent({ linksContato }: ContatoProps) {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit({ name, email, message, phone }: SubmitProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      const phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, digite um nome"),
        email: Yup.string()
          .email("Email inválido")
          .required("Por favor, digite um email"),
        message: Yup.string().required("Por favor, digite uma mensagem"),
        phone: Yup.string()
          .required("Por favor, digite um número")
          .min(11, "Número inválido"),
      });

      await schema.validate(
        { name, email, message, phone: phoneOnlyNumbers },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      const response = await api.post("form", {
        name,
        email,
        message,
        phone: phoneOnlyNumbers,
      });

      if (response.status === 200) {
        router.push({
          pathname: "/contato/sucesso",
          query: { name },
        });

        setLoading(false);
      }
    } catch (err) {
      setLoading(false);

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <ContactStyle id="contact" >
      <Container>
        <h4 className="title-6-regular uppercase">Envie uma mensagem</h4>

        <h3 className="title-4-bold title">Entre em contato</h3>
       
      {linksContato && <LinksContato icon/>}

        <Form method="post" ref={formRef} onSubmit={handleSubmit}>
          <InputComponent
            id="name"
            name="name"
            type="text"
            label="Nome completo"
            placeholder="Digite seu nome aqui"
          />

          <InputComponent
            id="email"
            name="email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail aqui"
          />

          <InputComponent
            id="phone"
            name="phone"
            type="text"
            placeholder="(DDD) 00000 - 0000"
            label="Telefone"
          />

          <TextAreaComponent
            label="Mensagem"
            id="message"
            name="message"
            placeholder="O que deseja nos dizer?"
          />

          <ButtonComponent type="submit" text="enviar" loading={loading} />
        </Form>
      </Container>
    </ContactStyle>
  );
}
