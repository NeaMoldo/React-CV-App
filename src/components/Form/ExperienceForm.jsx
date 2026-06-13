import ExperienceItemForm from './ExperienceItemForm';

function ExperienceForm({experienceList, onExperienceChange, onAddExperience, onDeleteExperience}) {

    return (
        <>
            {experienceList.map((exp, index) => (
                <div key={index} className='experience-item-wrapper'>
                    <ExperienceItemForm
                        workplace={exp.workplace}
                        position={exp.position}
                        duration={exp.duration}
                        onChange={(e) => onExperienceChange(e, index)}
                        onDelete={() => onDeleteExperience(index)}
                    />
                </div>
            ))}

            <button
                type='button'
                onClick={onAddExperience}
                className='add-btn'
            >
                + Add Experience
            </button>
        </>
    );
}

export default ExperienceForm