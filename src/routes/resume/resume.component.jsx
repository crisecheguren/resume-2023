import jobs from '../../data/jobs';
import{ useTheme } from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StyledContainer, StyledH3, StyledHeader, StyledParagraph } from './resume.styles';



const Resume = ({ onClick }) => {
    const theme = useTheme();

    return (
        <div onClick={onClick}>
            <StyledContainer>
            <StyledHeader>Resume</StyledHeader>
            <VerticalTimeline
                lineColor={theme.secondaryLight}
            >
                {jobs.map((job) => {
                    
                    return (
                        <VerticalTimelineElement
                            key={job.id}
                            date={job.date}
                            dateClassName="date"
                            contentArrowStyle={ { borderRight: `7px solid ${theme.secondaryLight}` } }
                            iconStyle={{ background: theme.primaryLight }}
                            icon={job.icon}
                            contentStyle={{ background: theme.secondaryLight }}
                        >
                        <StyledH3 className="vertical-timeline-element-title">{job.title}</StyledH3>
                        <h5 className="vertical-timeline-element-subtitle">{job.company}</h5>
                        <StyledParagraph>{job.description}</StyledParagraph>
                        </VerticalTimelineElement>
                    );})
                }
            </VerticalTimeline>\
            </StyledContainer>
        </div>
    );
    }

export default Resume;