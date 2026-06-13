import { useState } from "react"

import GeneralInfoForm from "./components/Form/GeneralInfoForm"
import EducationForm from "./components/Form/EducationForm"
import ExperienceForm from "./components/Form/ExperienceForm"

import GeneralInfoView from "./components/Preview/GeneralInfoView"
import EducationView from "./components/Preview/EducationView"
import ExperienceView from "./components/Preview/ExperienceView"

function App() {
    //Logic for General Info
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleGeneralChange = (e) => {
        const { name, value } = e.target;

        setGeneralInfo({
            ...generalInfo,
            [name]: value
        });
    };
    

    //Logic for Education
    const [educationList, setEducationList] = useState([
        { school: '', program: '', duration: ''}
    ]);

    const handleEducationChange = (e, index) => {
        const { name, value} = e.target;

        const updatedEduList = [...educationList];

        updatedEduList[index][name] = value;

        setEducationList(updatedEduList);
    };

    const handleAddEducation = () => {
        setEducationList([
            ...educationList,
            { school: '', program: '', duration:'' }
        ]);
    };

    const handleDeleteEducation = (indexToDelete) => {
        const updatedEduList = educationList.filter((_, i) => i !== indexToDelete);
        setEducationList(updatedEduList);
    };


    //Logic for Work
    const [experienceList, setExperienceList] = useState([
        { workplace: '', position: '', duration: ''}
    ]);

    const handleExperienceChange = (e, index) => {
        const { name, value } = e.target;

        const updatedExpList = [...experienceList];

        updatedExpList[index][name] = value;

        setExperienceList(updatedExpList);
    };

    const handleAddExperience = () => {
        setExperienceList([
            ...experienceList,
            { workplace: '', position: '', duration: ''}
        ]);
    };

    const handleDeleteExperience = (indexToDelete) => {
        const updatedExpList =  experienceList.filter((_,i) => i !== indexToDelete);
        setExperienceList(updatedExpList);
    };


    //Switch between Edit and Preview
    const [isEdit, setIsEdit] = useState(false);

    const switchMode = () => {
        setIsEdit(prev => !prev);
    };

    //Rendering
    if (isEdit){
        return (
            <>
                <h1>CV App</h1>

                <h2>General information</h2>
                <GeneralInfoForm 
                    name={generalInfo.name}
                    email={generalInfo.email}
                    phone={generalInfo.phone}
                    onChange={handleGeneralChange}
                />

                <h2>Education</h2>
                <EducationForm
                    educationList={educationList}
                    onEducationChange={handleEducationChange}
                    onAddEducation={handleAddEducation}
                    onDeleteEducation={handleDeleteEducation}
                />

                <h2>Practical experience</h2>
                <ExperienceForm
                    experienceList={experienceList}
                    onExperienceChange={handleExperienceChange}
                    onAddExperience={handleAddExperience}
                    onDeleteExperience={handleDeleteExperience}
                />

                <button
                    type="button"
                    onClick={switchMode}
                    className="switch-btn"
                >
                    Preview
                </button>
            </>
        )
    } else {
        return (
            <>
                <h1>CV App</h1>

                <h2>General information</h2>
                <GeneralInfoView
                    name={generalInfo.name}
                    email={generalInfo.email}
                    phone={generalInfo.phone}
                />

                <h2>Education</h2>
                <EducationView
                    educationList={educationList}
                />

                <h2>Practical experience</h2>
                <ExperienceView
                    experienceList={experienceList}
                />

                <button
                    type="button"
                    onClick={switchMode}
                    className="switch-btn"
                >
                    Edit
                </button>
            </>
        );
    }

}

export default App