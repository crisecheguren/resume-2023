import CardList from "../../components/card-list/card-list.component";
import projects from "../../data/projects";
import { StyledContainer, StyledHeader, StyledProjects } from "./projects.styles";

const Projects = ({onClick}) => {
    return (
        <StyledContainer onClick={onClick}>
            <StyledHeader>Projects</StyledHeader>
            <StyledProjects>
                <CardList projects={projects}/>
            </StyledProjects>
        </StyledContainer>
    )
}

export default Projects;