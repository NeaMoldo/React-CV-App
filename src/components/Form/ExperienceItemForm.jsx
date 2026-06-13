function ExperienceItemForm({workplace, position, duration, onChange, onDelete}) {
    return (
        <>
            <label htmlFor="workplace-input">Workplace:</label>
            <input 
                type="text" 
                name="workplace"
                value={workplace}
                onChange={onChange}
            />

            <label htmlFor="position-input">Position:</label>
            <input 
                type="text" 
                name="position"
                value={position}
                onChange={onChange}
            />

            <label htmlFor="duration-input">Duration:</label>
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

export default ExperienceItemForm;