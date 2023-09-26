import '../styles/components/textFields.scss'

function TextFields(props) {
    function textFieldOnChange(event) {
        props.change(event.target.value)
    }

    return (
        <div className="textFields">
            <label>
                { props.children }
            </label>
            <input
                value={ props.inputValue }
                placeholder={ props.placeholder }
                onChange={ textFieldOnChange }
                required={ props.required }
            />
        </div>
    )
}

export default TextFields