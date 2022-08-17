import { BoxInput, Button, Home, Input, Li, Title, Ul } from "../styles/style";
import { useState } from "react";

export function Body(){

    type ListaItens = {
            id:number;
            conteudo:string;
    }

    const [item, setItem] = useState<string>()
    const [itens, setItens] = useState<ListaItens[]>([])

    const addItem = () =>{
        if (!item) return
        setItens((oldLista) =>[
            ...oldLista,
            {
                id: itens.length+1,
                conteudo: item
            }
        ])
    }

    return(
    <Home>
        <Title>ToDo List</Title>
        <BoxInput name="form" onSubmit={(e) =>{
            e.preventDefault()
        }}>
            <Input onChange={(e) =>{
                setItem(e.target.value)
                }} 
                type="text" 
                placeholder="Informe o item a ser adicionado" 
            />

            <Button onClick={() =>{
                addItem()
            }}>Inserir</Button>
            
            
        </BoxInput>
            <Ul>
                {itens.map((e) =>{
                    return(
                        <Li key={e.id}>{e.conteudo}</Li>
                    )
                })}
            </Ul>

    </Home>
    )
}