import { Button, Buttons, Container, Image } from "./styles";
import {
  IoWaterOutline,
  IoPaperPlaneOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { StackedBarChart } from "../StackedBarChart";
import { useNavigate } from "react-router";
import { useCurrent } from "../../hooks/state";

interface companyProps{
  id:string;
  name:string;
  image:string;
}

export function CompanyComponent({id, name, image}:companyProps) {
  const labels = ["January", "February"];
  const navigate = useNavigate();
  const {setCompany} = useCurrent();

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgb(255, 77, 103)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgb(0, 255, 153)",
      },
    ],
  };

  function handleClickCompany(){
    //Fazer requisição a api da company para pegar os cards da mesma, usando o id dela
    //após receber requisição usar o o setCompany e navegar para a screen da company

    navigate("/pages/currentCompany")
  }

  return (
    <Container>
      <Image
        onClick={()=>{handleClickCompany()}}
        src={image}
      />
      <Buttons>
        <Button color="#d1b745">
          <IoWaterOutline size={20}></IoWaterOutline>
          <p>0</p>
        </Button>
        <Button color="gray">
          <IoPaperPlaneOutline size={20}></IoPaperPlaneOutline>
          <p>0</p>
        </Button>
        <Button color="#d47e65">
          <IoLockClosedOutline size={20}></IoLockClosedOutline>
          <p>0</p>
        </Button>
        <Button color="#cbcb9a">
          <BsEnvelope size={20}></BsEnvelope>
          <p>0</p>
        </Button>
        <Button color="black">
          <FiEdit size={20}></FiEdit>
          <p>0</p>
        </Button>
      </Buttons>
      <div className="containerChart">
        <StackedBarChart data={data} />
      </div>
      <p className="totalDeAnalise">5</p>
    </Container>
  );
}
