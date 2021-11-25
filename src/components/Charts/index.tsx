import { useState } from "react";
import { BarHorizontal } from "../HorizontalBarChart";
import { LineChart } from "../LineChart";
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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  console.log(labels.map(() => 15))

  const data1 = {
    labels,
    datasets: [
      {
        label: 'Quantidade',
        data: labels.map(() => Math.random() * 1000),
        borderColor: 'rgb(204, 204, 153)',
        backgroundColor: 'rgb(204, 204, 153,0.6)',
      }
    ],
  };
  
 const data2 = {
    labels,
    datasets: [
      {
        label: 'Bom',
        data: labels.map(() => Math.random() *1000),
        borderColor: 'rgb(122, 255, 99)',
        backgroundColor: 'rgba(122, 255, 99, 0.5)',
      },
    ],
  };

  const data3 = {
    labels,
    datasets: [
      {
        label: 'Bom',
        data: labels.map(() => Math.random() *1000),
        borderColor: 'rgb(0, 99, 132)',
        backgroundColor: 'rgba(0, 99, 132, 0.5)',
      },
      {
        label: 'Medio',
        data: labels.map(() => Math.random() *1000),
        borderColor: 'rgb(255, 196, 0)',
        backgroundColor: 'rgba(255, 196, 0, 0.5)',
      },
      {
        label: 'Ruim',
        data: labels.map(() => Math.random() *1000),
        borderColor: 'rgb(200, 7, 49)',
        backgroundColor: 'rgba(200, 7, 49, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <NavBar>
        {array.map((item) => (
          <Nav
            type="button"
            onClick={() => {
              setCurrentChart(item.id);
            }}
            style={{ color: currentChart == item.id ? "black" : "#999999" }}
          >
            {item.content}
          </Nav>
        ))}
      </NavBar>
      <div className={"containerChart"}>
        {currentChart == 1 && <BarHorizontal data={data1}/>}
        {currentChart == 2 && <LineChart  data={data2}/>}
        {currentChart == 3 && <LineChart data={data3} />}
      </div>
    </Container>
  );
}
