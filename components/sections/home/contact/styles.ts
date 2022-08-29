import styled from "styled-components";

interface ContactProps {
  bgForm?: boolean;
}

export const ContactStyle = styled.section<ContactProps>`
  background-image: url("/images/contato-home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  aspect-ratio: 1920/847;
  display: flex;
  align-items: center;
  padding: 100px 0;

  h4,
  h3 {
    color: #fff;
  }

  .title {
    margin-bottom: 33px;
  }

  form {
    max-width: 660px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  label {
    color: #fff;
  }

  button {
    background-color: var(--purple-color);
    max-width: 262px;
  }

  button:hover {
    background-color:var(--red-color);
  }

  .input-content,
  .textarea-content {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      border: unset;
      border-radius: 10px;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 80px 0;

    .title {
      margin-bottom: 25px;
    }

    form {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 65px 0;

    .title {
      margin-bottom: 21px;
    }

    form {
      max-width: 550px;
      gap: 14px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0;

    .title {
      margin-bottom: 21px;
    }

    form {
      max-width: 550px;
      gap: 14px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0;

    .title {
      margin-bottom: 15px;
    }

    form {
      max-width: 510px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0 40px;

    h3,
    h4 {
      text-align: center;
    }

    .title {
      margin-bottom: 10px;
    }

    .container {
      max-width: 470px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 20px 0 30px;

    .title {
      font-size: 20px;
    }

    h4 {
      font-size: 13px;
    }

    .input-content,
    .textarea-content {
      label {
        margin-bottom: 3px;
      }

      input,
      textarea {
        border-radius: 5px;
      }
    }

    .container {
      max-width: 350px;
    }
  }
`;
