import jobs from '../../data/jobs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StyledH3, StyledHeader, StyledParagraph } from './resume.styles';



const Resume = () => {

    return (
        <div>
        <StyledHeader>Resume</StyledHeader>
        <VerticalTimeline>
            {jobs.map((job) => {
                
                return (
                    <VerticalTimelineElement
                        key={job.id}
                        date={job.date}
                        dateClassName="date"
                        iconStyle={{ background: '#fff' }}
                        icon={job.icon}
                    >
                    <StyledH3 className="vertical-timeline-element-title">{job.title}</StyledH3>
                    <h5 className="vertical-timeline-element-subtitle">{job.company}</h5>
                    <StyledParagraph>{job.description}</StyledParagraph>
                    </VerticalTimelineElement>
                );})
            }
        </VerticalTimeline>
        </div>
    );
    }

export default Resume;