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
    height: 250px;
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
    transition: 400ms ease-in-out;

`
export const Button = styled.a`
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    padding:10px;
    margin:10px;
    background-color: ${props => props.color || '#0080ff'};;
    color:white;
    border-radius: 50%;
    cursor:pointer;
    transition: 400ms ease-in-out;
`

export const WrapperChart = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content:center;
    align-items:center;
`

export const Search = styled.div`
    display:flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;
    margin:20px;
    position: relative;
    min-height: 100%;
    width: 90%;

    input{
     padding:10px;
     width: 100%;
     border:1px solid black;
     border-radius: 5px;
     font-size: 15px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:10px;
        max-height: 150px;
        overflow-y: auto;
        overflow-x:hidden;
        width:100%;
    }
`;
export const Equipament = styled.a`
    display:flex;
    width: 100%;
    padding:10px;
    background-color: white;
    border:1px solid gray;
    margin:1px;
    border-radius:2px;
    font-size: 14px;
    cursor:pointer;

    &:hover{
        background-color: #222;
        color:white;
    }
`;