import '../styles/components/peoples.scss'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function Peoples(props) {
    function favorite() { //melhor maneira de fazer para o caso pois está sendo declarado em dois ou mais elementos ao mesmo tempo
        props.favOnClick(props.id)
    }
    
    const iconsStyle = { //melhor maneira de fazer para o caso pois está sendo declarado em dois ou mais elementos ao mesmo tempo
        size: 25,
        onClick: favorite
    }

    return (
        <div className="peoples">
            <AiFillCloseCircle 
                className="delete" 
                size={ iconsStyle.size }
                onClick={ () => props.onClick(props.id) } 
            />
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
                <div>
                    { props.fav 
                        ? <AiFillHeart {...favorite} color="red" />
                        : <AiOutlineHeart {...favorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Peoples