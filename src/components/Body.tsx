import { BoxInput, Home, Title } from "../styles/style";
import { useEffect, useState } from "react";
import { Button } from "../styles/Button.style";
import { Input, InputCheck, Li, Ul } from "../styles/Ul.styles";
import { DeleteIcon } from "../styles/Imgs.styles";
import { render } from "react-dom";

export function Body(){

    type ListaItens = {
            id:number;
            conteudo:string;
            check:boolean;
    }

    const [item, setItem] = useState<string>()
    const [itens, setItens] = useState<ListaItens[]>([])
    const [checked, setChecked] = useState(false);
    const [idAtual, setidAtual] = useState<number>()
    const [maiorId, setMaiorId] = useState<number>(1)

    const addItem = () =>{
        
        setMaiorId(maiorId + 1)

        if (!item) return
        setItens((oldLista) =>[
            ...oldLista,
            {
                id: maiorId,
                conteudo: item,
                check: false
            }
        ])
    }

    const removeItem = (e:ListaItens) =>{
        const index = itens.indexOf(e)
        itens.splice(index, 1)
        setItens([...itens])
    } 

    return(
    <Home>
        <Title>ToDo List</Title>
        <BoxInput name="form" onSubmit={(e) =>{
            e.preventDefault()
        }}>
            <Input maxLength={35} onChange={(e) =>{
                setItem(e.target.value)
                }}
                type="text" 
                placeholder="Informe o item a ser adicionado"
            />

            <Button onClick={(e) =>{
                addItem()
                setItem("")
            }}>Inserir</Button>
            
            
        </BoxInput>
            <Ul>
                {itens.map((e) =>{

                    return(
                        
                        <Li boxChecked={e.check} key={e.id}>
                            
                            <InputCheck type="checkbox" onChange={() =>{
                                {setidAtual(e.id)}
                                if(idAtual === e.id || idAtual === undefined){
                                    e.check= !checked
                                    setChecked(!checked)
                                    
                                }
                                else{
                                    e.check= !e.check
                                    setChecked(e.check)
                                }

                            }}/>
                            <DeleteIcon src="https://cdn-icons-png.flaticon.com/512/7263/7263521.png" 
                            
                                onClick={() =>{
                                    removeItem(e)
                                }}
                            />


                            {e.conteudo}
                            
                            
                        </Li>
                    )
                })}
            </Ul>

    </Home>
    )
}