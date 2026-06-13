import EducationItemView from './EducationItemView';

function EducationView({educationList}) {
    return (
        <>
            {educationList.map((edu, index) => (
                <div key={index} className='education-item-wrapper'>
                    <EducationItemView
                        school={edu.school}
                        program={edu.program}
                        duration={edu.duration}
                    />
                </div>
            ))}
        </>
    );
}

export default EducationView;