import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Loader } from "../../components/Loader";
import { BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import {
  Button,
  Container,
  FormContainer,
  Image,
  Input,
  Link,
  Logo,
  MainContainer,
  Titulo,
} from "./styles";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

interface RequestSignIn {
  login: string;
  senha: string;
}

export function LoginScreen() {
  const [loginText, setLoginText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");

  const navigate = useNavigate();
  const { signIn, user, loading } = useAuth();

  function ChangeTextLogin(event: InputProps) {
    const text = event.target.value;
    setLoginText(text);
  }
  function ChangeTextPassoword(event: InputProps) {
    const text = event.target.value;
    setPasswordText(text);
  }

  useEffect(() => {
    if (user) {
      navigate("/pages/home");
    }
  });

  async function HandleClickLogin() {
    const login = {
      login: loginText,
      senha: passwordText,
    };
    await signIn(login); 
  
  }

  return (
    <>
      {loading && <Loader />}

      <Container>
        <Image>
        <Logo src={`http://2407oilanalysis.unax.com.br/templates/unax/site/images/offshore.png`} />
        </Image>
        <MainContainer>
        <Logo src={`http://2407oilanalysis.unax.com.br/templates/unax/site/images/offshore.png`} />
          <FormContainer>
            <Titulo>Login</Titulo>
            <Input
              onChange={ChangeTextLogin}
              value={loginText}
              type="text"
              placeholder="Email"
            />
            <Input
              
              onChange={ChangeTextPassoword}
              value={passwordText}
              type="password"
              placeholder="Senha"
            />
            <Button type="button" onClick={HandleClickLogin}>
              Entrar
            </Button>
            <Link href="http://www.etm.srv.br/" target="_blank">
              Preciso de ajuda
            </Link>
          </FormContainer>
          <div></div>
          <div></div>
        </MainContainer>
      </Container>
    </>
  );
}
