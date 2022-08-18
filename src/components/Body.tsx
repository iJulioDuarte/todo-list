import { BoxInput, Home, Title } from "../styles/style";
import { useEffect, useRef, useState } from "react";
import { Button } from "../styles/Button.style";
import { Input, InputCheck, Li, Ul } from "../styles/Ul.styles";
import { DeleteIcon, EditIcon } from "../styles/Icons.styles";
import { ListaItens } from "./types";

export function Body(){

    const inputRef = useRef<HTMLInputElement>(null)

    const [item, setItem] = useState<string>("")
    const [itens, setItens] = useState<ListaItens[]>([])


    const [checked, setChecked] = useState(false);
    const [idCheckAtual, setidCheckAtual] = useState<number>()
    const [maiorId, setMaiorId] = useState<number>(1)

    useEffect(() =>{
        inputRef.current?.focus()
        setItem("")
    }, [itens])


 
    const getEditText = () =>{
        const textoNovo = prompt("Qual será a nova mensagem?")
        return textoNovo
    }

    const editItem = (e:ListaItens) =>{
        
    

        const index = itens.indexOf(e)
        const arrayItensCopy = Array.from(itens)
        
        const texto = getEditText()

        texto && arrayItensCopy.splice(index, 1, {id: e.id, conteudo: texto, check: e.check })
        setItens(arrayItensCopy)
    }

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
            <Input ref={inputRef} id="inputText" maxLength={40} onChange={(e) =>{
                setItem(e.target.value)
                }}
                type="text" 
                placeholder="Informe o item a ser adicionado"
                value={item}
            />

            <Button onClick={(e) =>{
                addItem()
            }}>Inserir</Button>
            
            
        </BoxInput>
            <Ul>
                {itens.map((e) =>{

                    return(
                        <Li boxChecked={e.check} key={e.id}>
                            
                            <InputCheck type="checkbox" onChange={() =>{
                                {setidCheckAtual(e.id)}
                                if(idCheckAtual === e.id || idCheckAtual === undefined){
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
                            <EditIcon src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" 
                            onClick={() =>{editItem(e)}}/> 

                            {e.conteudo}
                            
                           
                        </Li>

                    )
                })}
            </Ul>

    </Home>
    )
}