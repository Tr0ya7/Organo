import '../styles/components/dropBox.css'

function DropBox(props) {
    function dropBoxOnChange(event) {
        props.change(event.target.value)
    }

    return (
        <div>
            <label>
                { props.label }
            </label>
            <select required={ props.required } onChange={ dropBoxOnChange }>
                {props.itens.map(item => <option key={ item }>{item}</option>)}
            </select>
        </div>
    )
}

export default DropBox