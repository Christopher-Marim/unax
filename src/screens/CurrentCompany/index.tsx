import { CardComponent } from "../../components/Card";
import { ChartsComponent } from "../../components/Charts";
import { HeaderComponent } from "../../components/Header";
import { OffCanvasComponent } from "../../components/OffCanvas";
import { Cards, Container, Header, InfosCompany, Wrapper } from "./styles";

export function CurrentCompanyScreen(){
    return(
        <Container>
          {/* <OffCanvasComponent/> */}
      <Header>
        <HeaderComponent>
          <img src="http://2407oilanalysis.unax.com.br/templates/unax/site/images/logo-min.png"></img>
        </HeaderComponent>
      </Header>
      <Wrapper>
      <InfosCompany>
          <p>SMARTCASE</p>
          <div></div>
      </InfosCompany>
      <ChartsComponent></ChartsComponent>
      <Cards>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </Cards>
      </Wrapper>
    </Container>
    )
}