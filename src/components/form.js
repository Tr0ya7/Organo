import { useState } from 'react'
import '../styles/components/form.scss'
import Button from './button'
import DropBox from './dropBox'
import TextFields from './textFields'

function Form(props) {
    const [name, setName] = useState('')
    const [staff, setStaff] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [color, setColor] = useState('')

    function save(event) {
        event.preventDefault()
        props.submit({
            name,
            staff,
            image,
            team
        })
    }

    return (
        <section>
            <form onSubmit={ save }>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <TextFields
                    value={ name } 
                    required
                    placeholder="Digite seu nome" 
                    change={ value => setName(value) } 
                >
                    Nome
                </TextFields>
                <TextFields
                    value={ staff }
                    required
                    placeholder="Digite seu cargo" 
                    change={ value => setStaff(value) }
                >
                    Cargo
                </TextFields>
                <TextFields 
                    value={ image } 
                    placeholder="Informe o endereço da sua imagem" 
                    change={ value => setImage(value) }
                >
                    Imagem 
                </TextFields>
                <DropBox value={ team } required itens={ props.teams } change={ value => setTeam(value) }>
                    Time
                </DropBox>
                <Button>
                    Criar card
                </Button>
            </form>
            <form onSubmit={ (event) => {
                event.preventDefault()
                props.newTeamOnSubmit({
                    /*deve-se colocar 'name: ' para se atribuir que esse valor é o mesmo do array de teams 
                    criado no App.js*/
                    name: teamName,
                    color
                })
            } }>
                <TextFields
                    value={ teamName } 
                    required
                    placeholder="Digite um novo time" 
                    change={ value => setTeamName(value) } 
                >
                    Time
                </TextFields>
                <TextFields 
                    value={ color }
                    required
                    placeholder="Digite a cor do novo time"
                    change={ value => setColor(value) }
                >
                    Cor
                </TextFields>
                <Button>
                    Criar novo time
                </Button>
            </form>
        </section>
    )
}

export default Form