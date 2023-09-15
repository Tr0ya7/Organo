import '../styles/components/teams.css'
import Peoples from './Peoples'

function Teams(props) {
    return (
        props.inf.length > 0 ? <section className="team" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>
                { props.children }
            </h3>
            <div>
                { props.inf.map(info => <Peoples
                                            name={ info.name } 
                                            staff={ info.staff } 
                                            image={ info.image }
                                        />) }
            </div>
        </section>
        : ''
    )
}

export default Teams