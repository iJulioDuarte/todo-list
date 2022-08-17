import { BoxInput, Home, Title } from "../styles/style";
import { useState } from "react";
import { Button } from "../styles/Button.style";
import { Input, InputCheck, Li, Ul } from "../styles/Ul.styles";
import { DeleteIcon } from "../styles/Imgs.styles";

export function Body(){

    type ListaItens = {
            id:number;
            conteudo:string;
    }

    const [item, setItem] = useState<string>()
    const [itens, setItens] = useState<ListaItens[]>([])

    const [checked, setChecked] = useState(false);

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
                        
                        <Li boxChecked={checked} key={e.id}>
                            <InputCheck type="checkbox" onChange={() =>{
                                setChecked(!checked)
                            }} />
                            <DeleteIcon src="https://cdn-icons-png.flaticon.com/512/7263/7263521.png" />


                            {e.conteudo}
                            
                            
                        </Li>
                    )
                })}
            </Ul>

    </Home>
    )
}