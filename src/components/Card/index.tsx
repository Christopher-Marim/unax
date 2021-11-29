import { DoughnutChart } from "../DoughnutChart";
import { Button, Buttons,  ButtonSelect,  Container, InfosCard, WrapperChart } from "./styles";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
export function CardComponent() {
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
        <Button>
          <VscTools size={25}></VscTools>
        </Button>
      </Buttons>
    </Container>
  );
}
