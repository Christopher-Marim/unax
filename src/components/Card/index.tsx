import { DoughnutChart } from "../DoughnutChart";
import {
  Button,
  Buttons,
  Container,
  Equipament,
  InfosCard,
  Search,
  WrapperChart,
} from "./styles";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { useState } from "react";
import { useNavigate } from "react-router";

interface ArrayEquipament {
  id: number;
  cod: string;
  name: string;
}
export function CardComponent() {
  const [valueInput, setValueInput] = useState<string>();
  const [searchEquipamentStatus, setSearchEquipamentStatus] = useState(false);

  const navigate = useNavigate();

  const arrayEquipaments: ArrayEquipament[] = [
    { id: 1, cod: "2514", name: "Motor de Bitorneira" },
    { id: 2, cod: "2345", name: "Motor de caminhão" },
    { id: 3, cod: "5651", name: "Lazer de arroz" },
    { id: 4, cod: "5647", name: "Passaro de banana" },
    { id: 5, cod: "1234", name: "Passaro de laranja" },
    { id: 6, cod: "1234", name: "Passaro de laranja" },
  ];
  const [arrayEquipamentsAux, setArrayEquipamentsAux] =
    useState<(ArrayEquipament | undefined)[]>(arrayEquipaments);

  function SearchFunction(e: React.FormEvent<HTMLInputElement>) {
    setValueInput(e.currentTarget.value);
    console.log(e.currentTarget.value);
    const listAux = arrayEquipaments.map((x) => {
      if (x?.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
        return x;
      }
      if (x?.cod.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
        return x;
      }
    });

    setArrayEquipamentsAux(listAux);
  }

  return (
    <Container>
      <WrapperChart>
        1 Relatorio
        <div
          style={{
            borderRightWidth: 1,
            borderColor: "#ccc",
            borderRightStyle: "solid",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 175,
          }}
        >
          <DoughnutChart></DoughnutChart>
        </div>
      </WrapperChart>
      <InfosCard>
        <h3>Teste</h3>
        <p>
          Contato: <strong>{"22998474022"}</strong>
        </p>
        <p>
          Email: <strong>{"admin@etm.srv.br"}</strong>
        </p>
      </InfosCard>
      {searchEquipamentStatus && (
        <Search>
          <input
            placeholder={"Buscar Equipamentos"}
            onChange={(e) => {
              SearchFunction(e);
            }}
          ></input>
          <div>
            {arrayEquipamentsAux.map((x) => (
              <>
                {x && (
                  <Equipament key={x?.id} onClick={(()=>{navigate('/pages/currentEquipament')})}>
                    <strong>Cod:{x?.cod}</strong> - {x?.name}
                  </Equipament>
                )}
              </>
            ))}
          </div>
        </Search>
      )}
      <Buttons>
        <Button>
          <FiEdit size={25}></FiEdit>
        </Button>
        <Button>
          <AiOutlineSchedule size={25}></AiOutlineSchedule>
        </Button>
        <Button>
          <HiOutlineDocumentReport size={25}></HiOutlineDocumentReport>
        </Button>
        <Button
        color={searchEquipamentStatus?'#df3434':'#0080ff'}
          onClick={() => {
            setSearchEquipamentStatus(!searchEquipamentStatus);
          }}
        >
          <VscTools size={25}></VscTools>
        </Button>
      </Buttons>
    </Container>
  );
}
