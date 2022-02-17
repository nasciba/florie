import React from "react";
import service from "../../service/authService";
import Footer from "../../components/footer/Footer";
import FormField from "../../components/FormField";
import { Link } from "react-router-dom";
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from "./style";
import { StyledGreenButton } from "../../components/buttons/styles";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [streetNumber, setStreetNumber] = React.useState("");
  const [complement, setComplement] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [cpf, setCpf] = React.useState("");


  const handleFormSubmit = async () => {
    try {
      await service.signUp(
        username,
        password,
        firstName,
        lastName,
        street,
        streetNumber,
        complement,
        district,
        city,
        state,
        zipcode,
        phoneNumber,
        cpf
      );
      this.props.history.push("/profile");
      alert("Conta criada com sucesso!");
    } catch (error) {
      throw error;
    }
  };

  return (
    <React.Fragment>
      <StyledDisplay>
        <StyledInputAuth>
          <StyledTextAccount>Faça aqui seu cadastro ;)</StyledTextAccount>
          <form onSubmit={handleFormSubmit}>
            <FormField
              label="E-mail"
              type="email"
              name="email"
              value={username}
              onChange={setUsername}
            />
            <FormField
              label="Nome:"
              type="text"
              name="firstName"
              value={firstName}
              onChange={setFirstName}
            />
            <FormField
              label="Sobrenome:"
              type="text"
              name="setLastName"
              value={lastName}
              onChange={setLastName}
            />
            <FormField
              label="Telefone:"
              type="text"
              name="setPhoneNumber"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            <FormField
              label="CPF:"
              type="text"
              name="cpf"
              value={cpf}
              onChange={setCpf}
            />
            <FormField
              label="Rua/Avenida:"
              type="text"
              name="street"
              value={street}
              onChange={setStreet}
            />
            <FormField
              label="Número:"
              type="text"
              name="streetNumber"
              value={streetNumber}
              onChange={setStreetNumber}
            />
            <FormField
              label="Complemento (apto, bloco, etc.):"
              type="text"
              name="complement"
              value={complement}
              onChange={setComplement}
            />
            <FormField
              label="Bairro"
              type="text"
              name="district"
              value={district}
              onChange={setDistrict}
            />
            <FormField
              label="Cidade:"
              type="text"
              name="city"
              value={city}
              onChange={setCity}
            />
            <FormField
              label="Estado:"
              type="text"
              name="state"
              value={state}
              onChange={setState}
            />
            <FormField
              label="CEP:"
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={setZipcode}
            />
            <FormField
              label="Senha:"
              type="text"
              placeholder="pelo menos 7 caracteres :D"
              name="password"
              value={password}
              onChange={setPassword}
            />
            <StyledGreenButton type="submit">CRIAR CONTA</StyledGreenButton>
          </form>
          <span>
            Já tem uma conta? <Link to={"/login"}>Login</Link>
          </span>
        </StyledInputAuth>
      </StyledDisplay>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
