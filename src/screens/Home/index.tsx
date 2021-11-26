import { ChartsComponent } from "../../components/Charts";
import { CompanyComponent } from "../../components/Company";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Wrapper } from "./styles";

export function HomeScreen() {
  return (
    <Container>
      <Header>
        <HeaderComponent>
          <img src="http://2407oilanalysis.unax.com.br/templates/unax/site/images/logo-min.png"></img>
        </HeaderComponent>
      </Header>
      <Wrapper>
        <ChartsComponent></ChartsComponent>
        <ul>
        <CompanyComponent></CompanyComponent>
        <CompanyComponent></CompanyComponent>
        <CompanyComponent></CompanyComponent>
        <CompanyComponent></CompanyComponent>
        </ul>
      </Wrapper>
    </Container>
  );
}
