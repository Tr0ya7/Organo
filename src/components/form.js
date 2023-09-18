import { useState } from 'react'
import '../styles/components/form.css'
import Button from './button'
import DropBox from './dropBox'
import TextFields from './textFields'

function Form(props) {
    const [name, setName] = useState('')
    const [staff, setStaff] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

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
                    label="Nome" 
                    value={ name } 
                    required="true" 
                    placeholder="Digite seu nome" 
                    change={ value => setName(value) } 
                />
                <TextFields 
                    label="Cargo" 
                    value={ staff }
                    required="true" 
                    placeholder="Digite seu cargo" 
                    change={ value => setStaff(value) }
                />
                <TextFields 
                    label="Imagem" 
                    value={ image } 
                    placeholder="Informe o endereço da sua imagem" 
                    change={ value => setImage(value) }
                />
                <DropBox 
                    label="Time" 
                    value={ team } 
                    required="true" 
                    itens={ props.teams }
                    change={ value => setTeam(value) }
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form