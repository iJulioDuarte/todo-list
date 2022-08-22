import styled from "styled-components";

export const Button = styled.button`
    background-color:#96E6B3;
    width: 7rem;
    height: 2.5rem;
    margin-bottom:1rem;
    color: #555;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    
    cursor: pointer;

    :hover{
        background-color:#87FFA2;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
    };
    :active{
        background-color:#54E68A;
        
    }

`