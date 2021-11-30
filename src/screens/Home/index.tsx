import { ChartsComponent } from "../../components/Charts";
import { CompanyComponent } from "../../components/Company";
import { HeaderComponent } from "../../components/Header";
import { Container, Header, Wrapper } from "./styles";


interface companyProps{
  id:string;
  name:string;
  image:string;
}

export function HomeScreen() {

  const arrayCompany:companyProps[] = [
    {id:'1',
    image:'http://2407oilanalysis.unax.com.br/resources/uploads/Cliente/b80998a6-148a-491a-95a8-24db32b597e5/CBX.jpg',
    name:'CBX'
  },
    {id:'2',
    image:'http://2407oilanalysis.unax.com.br/resources/uploads/Cliente/0de095d6-0428-4720-bdfb-93b7d1282592/sparrows-bsm.jpg',
    name:'Sparrows'
  },
    {id:'3',
    image:'http://2407oilanalysis.unax.com.br/resources/uploads/Cliente/fc7327fe-aa4f-476f-a484-872dc58806e5/SCHLUMBERGER.jpg',
    name:'SCHLUMBERGER'
  },
    {id:'4',
    image:'http://2407oilanalysis.unax.com.br/resources/uploads/Cliente/d89c3ebd-891f-46fa-bcd0-22a891b96e54/SHELL.jpeg',
    name:'SHELL'
  },
  ]

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
          {arrayCompany.map((company)=>(
            <CompanyComponent key={company.id} {...company} ></CompanyComponent>
          ))}
        </ul>
      </Wrapper>
    </Container>
  );
}
