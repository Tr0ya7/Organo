import '../styles/components/teams.scss'
import Peoples from './peoples'
import hexToRgba from 'hex-to-rgba'

function Teams(props) {
    return (
        props.peoples.length > 0 ? <section 
                                        className="team" 
                                        style={{ backgroundColor: hexToRgba(props.secondColor, .6) }}
                                    >
            <input
                type="color"
                className="input-color"
                value={ props.primaryColor }
                onChange={ event => props.onChangeColor(event.target.value, props.id) }
            />
            <h3 style={{ borderColor: props.primaryColor }}>
                { props.name }
            </h3>
            <div className="team-peoples">
                { props.peoples.map((people, peopleKey) => {
                    return <Peoples 
                                key={ peopleKey } 
                                onClick={ props.onClick }
                                background={ props.primaryColor } //É declarado como props para pegar um elemento fora desse map
                                name={ people.name } //É declarado como people para inserir no array das informações infos no componente/arquivo app.js
                                staff={ people.staff }
                                image={ people.image }
                                favOnClick={ props.favOnClick }
                            />
                }) } 
            </div>
        </section>
        : ''
    )
}

export default Teams