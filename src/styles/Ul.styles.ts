import styled from "styled-components"

type LiType = {
    boxChecked:boolean
}

export const Ul = styled.ul`
    list-style: none;
    margin-top:2rem;
    width:80%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem;

    @media (max-width: 768px){
        justify-content:center;
    }
`

export const Li = styled.li<LiType>`
    width: 47%;
    height: 2.3rem;
    font-size: 18px;
    border: 2px solid #00A000;
    border-radius: 16px;
    text-align: initial;
    padding-left: 0.9rem;
    margin-top: 1rem;
    display:flex;
    align-items:center;
    background-color: #F6FAF8;
    color: #000;

    text-decoration: ${props => props.boxChecked ? "line-through" : "none"};

    @media (max-width: 768px){
        width: 90%;
        font-size:11px;
    }
`

export const Input = styled.input`
    background-color: #F6FAF8;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 90%;
    height: 60%;
    border: 2px solid #00A000;
    border-radius: 16px;
    color: #000;
    font-size: 17px;
`

export const InputCheck = styled.input<LiType>`
    margin-right:0.5rem;
    display: ${props => props.boxChecked ? "none" : "inherit"}
`