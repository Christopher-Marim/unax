import { useState } from "react";
import { Container, NavBar, Nav } from "./styles";
//import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export function ChartsComponent() {
  const [currentChart, setCurrentChart] = useState(1);

  const array = [
    {
      id: 1,
      content: "Meta do mês",
    },
    {
      id: 2,
      content: "Produção de Relatórios",
    },
    {
      id: 3,
      content: "Controle de nota",
    },
  ];

  return (
    <Container>
      <NavBar>
        {array.map((item) => (
          <Nav
            onClick={() => {
              setCurrentChart(item.id);
            }}
            style={{ color: currentChart == item.id ? "black" : "#999999" }}
          >
            {item.content}
          </Nav>
        ))}
      </NavBar>
    </Container>
  );
}
