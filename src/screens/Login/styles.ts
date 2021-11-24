import styled from "styled-components";
import px2vw from "../../utils/px2vw";

import imagem from "../../assets/loginBanner.jpeg";

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: stretch;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.aside`
  flex: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imagem});
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (min-width: 1024px) {
    flex: 7;
    display: flex;
  }
`;

export const Logo = styled.img`
  width: 400px;
  object-fit: contain;
`;

export const MainContainer = styled.main`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  max-width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
    url(${imagem});
  background-size: cover;
  background-position: center;
  img {
    display: block;
  }

  @media (min-width: 1024px) {
    flex: 8;
    background: #fff;
    justify-content: center;
    img {
      display: none;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  margin: 5px;
  background-color: #fff;
  width: 100%;
  max-width: 320px;
  border: 2px solid #a8a8b3;
  &:focus {
    outline: none !important;
    border: 2px solid #9c0000;
  }
  @media (max-width: 1024px) {
    height: 50px;
    border-radius: 0px;
    font-size: 15px;
    padding: 0 16px;
    margin: 5px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    width: 100%;
    max-width: 320px;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    ::placeholder {
      color: white;
    }
    &:focus {
      outline: none !important;
      border: none;
      border-bottom: 2px solid #9c0000;
    }
  }
`;
export const Titulo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 1.5em;
  letter-spacing: 0.15em;

  @media (max-width: 1024px) {
    font-size: 24px;
    color: white;
  }
`;
export const Button = styled.button`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  max-width: 320px;
  border-radius: 8px;
  height: 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #9c0000;
  border: 1px solid #9c0000;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Link = styled.a`
  display: flex;
  font-size: ${px2vw(11)};
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  color: grey;
`;
