import { StyledCard } from "./card.styles";
import { Link } from 'react-router-dom';

const Card = ({ name, description, img, projectLink, sourceLink }) => {
    return (
        <StyledCard>
            <div className="bodyStyle">
                <img className='imgStyle' src={img} alt={name} />
                <h2>{name}</h2>
                <p className="pStyle">{description}</p>
            </div>
            <div className="btnContainer">
                <Link to={projectLink} target='_blank'> 
                    <button className='btnStyle'>
                        View Project
                    </button>
                </Link>
                <Link to={sourceLink} target='_blank'>
                    <button className='btnStyle'>
                        View Source
                    </button>
                </Link>
            </div>
        </StyledCard>
    )
}

export default Card;
