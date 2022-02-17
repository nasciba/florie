import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { StyledDisplay, StyledInputAuth, StyledTextAccount } from "./style";
import { StyledGreenButton } from "../../components/buttons/styles";
import service from "../../service/authService";
import FormField from "../../components/FormField";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleFormSubmit = useCallback(async () => {
    console.log("entrou");
    try {
      const login = await service.login(username, password);
      sessionStorage.setItem("loggedUser", JSON.stringify(login));
      this.props.history.push(`${this.props.location.state.from.pathname}`);
      //setUsername("");
      //setPassword("");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [password, username]);

  return (
    <React.Fragment>
      <StyledDisplay>
        <StyledInputAuth>
          <StyledTextAccount>Acesse sua conta aqui ;)</StyledTextAccount>
          <form>
            <FormField
              type="text"
              name="username"
              placeholder="Seu e-mail"
              value={username}
              onChange={setUsername}
            />
            <FormField
              name="password"
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <StyledGreenButton onClick={handleFormSubmit}>
              ENTRAR
            </StyledGreenButton>
            <StyledGreenButton>
              <Link to={"/signup"}>CADASTRAR</Link>
            </StyledGreenButton>
          </form>
        </StyledInputAuth>
      </StyledDisplay>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
