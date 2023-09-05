import '../styles/components/textFields.css'

function TextFields(props) {  
    return (
        <div className="textFields">
            <label>
                { props.label }
            </label>
            <input placeholder={ props.placeholder } />
        </div>
    )
}

export default TextFields