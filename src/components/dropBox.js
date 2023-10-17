import '../styles/components/dropBox.scss'

function DropBox(props) {
    function dropBoxOnChange(event) {
        props.change(event.target.value)
    }

    return (
        <div>
            <label>
                { props.children }
            </label>
            <select required={ props.required } onChange={ dropBoxOnChange }>
                { props.itens.map(item =>
                <option key={ item }>
                    { item }
                </option>) }
            </select>
        </div>
    )
}

export default DropBox