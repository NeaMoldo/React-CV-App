function GeneralInfoView({name, email, phone}) {
    return (
        <>
            <h3>Full name:</h3>
            {name}

            <h3>Email:</h3>
            {email}

            <h3>phone</h3>
            {phone}
        </>
    );
}

export default GeneralInfoView