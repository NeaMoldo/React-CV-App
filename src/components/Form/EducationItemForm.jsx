function EducationItemForm({school, program, duration, onChange, onDelete}) {
    return (
        <>
            <label htmlFor="school-input">School:</label>
            <input
                type="text" 
                name="school"
                value={school}
                onChange={onChange}
            />

            <label htmlFor="education-pogram-input">Program</label>
            <input
                type="text" 
                name="program"
                value={program}
                onChange={onChange}
            />

            <label htmlFor="duration">Duration:</label>
            <input
                type="text" 
                name="duration"
                value={duration}
                onChange={onChange}
            />

            <button
                type="button"
                onClick={onDelete}
                className="delete-btn"
            >
                Delete this item
            </button>
            <br/>
        </>
    );
}

export default EducationItemForm;