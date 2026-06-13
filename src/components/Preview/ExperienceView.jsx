import ExperienceItemView from './ExperienceItemView';

function ExperienceView({experienceList}) {
    return (
        <>
            {experienceList.map((exp, index) => (
                <div key={index} className='experience-item-wrapper'>
                    <ExperienceItemView
                        workplace={exp.workplace}
                        position={exp.position}
                        duration={exp.duration}
                    />
                </div>
            ))}
        </>
    );
}

export default ExperienceView;