import { HeaderComponent } from "../../components/Header";
import { Container, Header, InfosEquipament, Wrapper, NameEquipament } from './styles';

export function CurrentEquipamentScreen() {
  return (
    <Container>
      <Header>
        <HeaderComponent>
          <img src="http://2407oilanalysis.unax.com.br/templates/unax/site/images/logo-min.png"></img>
        </HeaderComponent>
      </Header>
      <Wrapper>
      <NameEquipament>
          <p>TANQUE</p>
          <div></div>
      </NameEquipament>
      <InfosEquipament>
          
      </InfosEquipament>

      </Wrapper>
    </Container>
  );
}
