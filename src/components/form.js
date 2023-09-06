import { useState } from 'react'
import '../styles/components/form.css'
import Button from './button'
import DropBox from './dropBox'
import TextFields from './textFields'

function Form() {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    function save(event) {
        event.preventDefault()
        console.log(`Salvo com sucesso => ${name} ${post} ${image} ${team}`)
    }

    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    return (
        <section>
            <form onSubmit={ save }>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <TextFields label="Nome" value={ name } required="true" placeholder="Digite seu nome" change={ value => setName(value) } />
                <TextFields label="Cargo" value={ post } required="true" placeholder="Digite seu cargo" change={ value => setPost(value) } />
                <TextFields label="Imagem" value={ image } placeholder="Informe o endereço da sua imagem" change={ value => setImage(value) } />
                <DropBox label="Time" value={ team } required="true" itens={ teams } change={ value => setTeam(value) } />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form