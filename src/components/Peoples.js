import '../styles/components/peoples.css'
import { AiFillCloseCircle } from 'react-icons/ai'

function Peoples(props) {
    return (
        <div className="peoples">
            <AiFillCloseCircle className="delete" size={25} onClick={ props.onClick(props.id) } />
            <div className="header" style={{ background: props.background }}>
                <img src={ props.image } alt={ props.name } />
            </div>
            <div className="footer">
                <h4>
                    { props.name }
                </h4>
                <h5>
                    { props.staff }
                </h5>
            </div>
        </div>
    )
}

export default Peoples