import '../styles/components/textFields.css'

function TextFields(props) {

    function textFieldOnChange(event) {
        props.change(event.target.value)
    }

    return (
        <div className="textFields">
            <label>
                { props.label }
            </label>
            <input required={ props.required }  value={ props.inputValue } placeholder={ props.placeholder } onChange={ textFieldOnChange } />
        </div>
    )
}

export default TextFields