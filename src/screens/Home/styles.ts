import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  width:100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`;
export const Wrapper = styled.div`
  display: flex;
  flex:10;
  padding-top: 40px;
  flex-direction: column;
  height: auto;
  width:100%;
  justify-content: center;
  align-items: center;
  background:linear-gradient(#1b1b1f, rgba(0, 0, 0));
  ul{
    display: flex;
    width: 58rem;
    margin-top: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
`;
export const Header = styled.div`
  display: flex;
  flex:1;
  width:100%;
  justify-content: center;
  align-items: center;
  background-color: #36373e;
`;