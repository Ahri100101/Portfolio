import React, { useState, useEffect } from "react";

const calculateAge = () => {
    const birthDate = new Date('2001-10-01');
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const About = () => {
    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
        const interval = setInterval(() => {
            const newAge = calculateAge();
            setAge(newAge);
        }, 86400000);

        return () => clearInterval(interval);
    }, []);

    const about = [
        { title: 'Full Name', info: 'Ariz Ann C. Salazar' },
        { title: 'Nickname', info: 'A / Ei / Riz / Ace' },
        { title: 'Address', info: 'Imus City, Cavite, Philippines' },
        { title: 'Age', info: `${age} Years Old` },
        { title: 'Sex', info: 'Female' },
        { title: 'School', info: 'Pamantasan ng Lungsod ng Maynila' },
        { title: 'Course', info: 'BS in Information Technology' },
        { title: 'Training', info: 'Frontend Developer, UI/UX/Graphic Designer' },
        { title: 'Company', info: 'Monheim Distributors, Inc.' },
    ];

    return (
        <div className="flex flex-col text-white font-font1" id="about">
            <div className="text-center">
                <p className="text-light text-3xl font-bold mb-5">About</p>
                <p className="text-justify"> 
                    Hello! My name is Ariz Ann C. Salazar. My family and friends
                    call me “A”. Presently, I am residing in Imus City, Cavite, Philippines.
                    I am {age} years old and a Bachelor of Science in Information Technology
                    graduating student at Pamantasan ng Lungsod ng Maynila.
                </p>
                <br />
                <p className="text-justify">
                    In my 4th year of college, 2nd semester, I have been a Frontend Developer
                    and UI/UX/Graphic Designer trainee at Monheim Distributors, Inc. for almost
                    4 months, completing 486 hours of training.
                </p>
                <br />
            </div>
            <p className="text-center text-lg font-bold pb-2">IN SUMMARY</p>
            {about.map((information, index) => (
                <div key={index}>
                    <div className="text-left pt-3 font-bold">
                        <p>{information.title}</p>
                    </div>
                    <div className="text-center border-[1px] rounded-md">
                        <p>{information.info}</p>
                    </div>
                </div>
            ))}
            <br />
        </div>
    )
}

export default About