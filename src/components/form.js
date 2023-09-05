import '../styles/components/form.css'
import TextFields from './textFields'

function Form() {
    return (
        <section>
            <form>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <TextFields label="Nome" placeholder="Digite seu nome" />
                <TextFields label="Cargo" placeholder="Digite seu cargo" />
                <TextFields label="Imagem" placeholder="Informe o endereço da sua imagem" />
            </form>
        </section>
    )
}

export default Form