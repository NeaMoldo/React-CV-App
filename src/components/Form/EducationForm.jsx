import EducationItemForm from './EducationItemForm';

function EducationForm({educationList, onEducationChange, onAddEducation, onDeleteEducation}) {
    
    return (
        <>
            {educationList.map((edu, index) => (
                <div key={index} className='education-item-wrapper'>
                    <EducationItemForm 
                        school={edu.school}
                        program={edu.program}
                        duration={edu.duration}
                        onChange={(e) => onEducationChange(e, index)}
                        onDelete={() => onDeleteEducation(index)}
                    />
                </div>
            ))}

            <button
                type='button'
                onClick={onAddEducation}
                className='add-btn'
            >
                + Add Education
            </button>
        </>
    );
}

export default EducationForm;