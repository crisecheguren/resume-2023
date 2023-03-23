import Card from '../card/card.component';
import { StyledCardList } from './card-list.styles';

const CardList = ({ projects }) => {
    return (
        <StyledCardList>
            {projects.map((project, i) => (
                <Card key={i} 
                      name={projects[i].name}
                      description={projects[i].description}
                      img={projects[i].img}
                      projectLink={projects[i].projectLink}
                      sourceLink={projects[i].sourceLink}
                      
                />
            ))}
        </StyledCardList>
    )
}

export default CardList;