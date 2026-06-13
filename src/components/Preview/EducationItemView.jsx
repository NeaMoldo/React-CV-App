function EducationItemView({school, program, duration}) {
    return (
        <>
            <h3>School:</h3>
            {school}

            <h3>Program:</h3>
            {program}

            <h3>duration</h3>
            {duration}
            <br/>
        </>
    );
}

export default EducationItemView;