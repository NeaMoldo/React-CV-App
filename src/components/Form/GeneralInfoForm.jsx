function GeneralInfoForm ({name, email, phone, onChange}) {
    return (
       <>
            <label htmlFor="name-input">Full name:</label>
            <input 
                type="text" 
                name="name"
                value={name}
                onChange={onChange}
            />

            <label htmlFor="emai-input">Email:</label>
            <input type="text" 
                type="email"
                name="email"
                value={email}
                onChange={onChange}
            />

            <label htmlFor="phone-input">Phone:</label>
            <input 
                type="text" 
                name="phone"
                value={phone}
                onChange={onChange}
            />
       </> 
    );
}

export default GeneralInfoForm