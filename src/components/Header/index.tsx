
import { Container } from "./styles";

interface Props {
    children?: JSX.Element
  }

export function HeaderComponent({children}:Props){
    return(
        <Container>
            {children}
        </Container>
    );
}