import '../styles/components/peoples.css'

function Peoples(props) {
    return (
        <div className="peoples">
            <div className="header">
                <img src={ props.image } alt={ props.name } />
            </div>
            <div className="">
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