import '../styles/components/teams.css'
import Peoples from './Peoples'

function Teams(props) {
    return (
        props.inf.length > 0 ? <section className="team" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>
                { props.children }
            </h3>
            <input type="color" className="input-color" />
            <div className="team-peoples">
                { props.inf.map((info, Ikey) => {
                    return <Peoples 
                            key={ Ikey } 
                            onClick={ props.onClick }
                            background={ props.primaryColor } //É declarado como props para pegar um elemento fora desse map
                            name={ info.name } //É declarado como inf para inserir no array das informações infos no componente/arquivo app.js
                            staff={ info.staff }
                            image={ info.image }
                           />
                }) }
            </div>
        </section>
        : ''
    )
}

export default Teams