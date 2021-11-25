import { HeaderComponent } from "../../components/Header";
import { Container } from "./styles";

export function HomeScreen(){
    return(
        <Container>
            <HeaderComponent>
                <img src='http://2407oilanalysis.unax.com.br/templates/unax/site/images/logo-min.png'></img>
            </HeaderComponent>
        </Container>
    );
}