import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color:white;
    border-radius: 10px;
    padding:10px;
    width:100%;
    margin-top:10px;
`
export const InfosCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start; 
    margin-left: 20px;
    width: 100%;
    h3{
        font-size: 30px;
    }
    p{
        font-size: 20px;
    }
`
export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Button = styled.a`
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding:10px;
    margin:10px;
    background-color: #0080ff;
    color:white;
    border-radius: 50%;
    cursor:pointer;
`
export const ButtonSelect = styled.a`
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding:10px;
    margin:10px;
    background-color: #0080ff;
    color:white;
    border-radius: 15px;
    cursor:pointer;

    select{
        background-color: transparent;
        color:white;
        border-style: none;
        font-size: 18px;
    }
`

export const WrapperChart = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content:center;
    align-items:center;
`