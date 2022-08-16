import { BoxInput, Home, Input, Title } from "../styles/style";
import GlobalStyle from "../styles/globalStyles"

export function Body(){
    return(
    <Home>
        <Title>ToDo List</Title>
        <BoxInput>
            <Input type="text" placeholder="Informe o item a ser adicionado"></Input>
        </BoxInput>
    </Home>
    )
}