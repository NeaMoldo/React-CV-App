function ExperienceItemView({workplace, position, duration}) {
    return (
        <>
            <h3>Workplace:</h3>
            {workplace}

            <h3>Position:</h3>
            {position}

            <h3>Duration</h3>
            {duration}
            <br/>
        </>
    );
}

export default ExperienceItemView