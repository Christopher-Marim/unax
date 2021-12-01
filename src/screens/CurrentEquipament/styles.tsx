import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width:100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(#fff, #cccccc);
  
`;
export const Wrapper = styled.div`
  display: flex;
  flex:10;
  padding-top: 40px;
  flex-direction: column;
  width:100%;
  justify-content: baseline;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex:1;
  width:100%;
  justify-content: center;
  align-items: center;
  background-color: #36373e;
`;
export const NameEquipament = styled.div`
  display: flex;
  width:58rem;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccc;
  margin-bottom: 10px;

  p{
    color:#404040;
  }

`;
export const InfosEquipament = styled.div`
  display: flex;
  flex-direction: row;
  width:58rem;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cccc;
  margin: 10px;

`;

