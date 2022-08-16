import { BoxInput, Home, Title } from "../styles/style";
import GlobalStyle from "../styles/globalStyles"

export function Body(){
    return(
    <Home>
        <Title>ToDo List</Title>
        <BoxInput>
            <input type="text" placeholder="Informe o item a ser adicionado"></input>
        </BoxInput>
    </Home>
    )
}