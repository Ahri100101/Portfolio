const Skills = () => {
    const skills = [
        { skill: 'Attention to Details' },
        { skill: 'Adaptive' },
        { skill: 'Collaboration' },
        { skill: 'Communication' },
        { skill: 'Fast Learner' },
        { skill: 'Flexible' },
        { skill: 'Leader' },
        { skill: 'Teamwork' },
        { skill: 'Time Management' },
        { skill: 'Willingness to Learn' },
    ];

    const software = [
        { skill: 'Canva' },
        { skill: 'Figma' },
        { skill: 'GitHub' },
        { skill: 'VS Code' },
        { skill: 'Word' },
        { skill: 'Powerpoint' },
        { skill: 'Excel' },
        { skill: 'Outlook' },
    ];

    const frontLanguage = [
        { skill: 'HTML' },
        { skill: 'Vanilla CSS' },
        { skill: 'Tailwind CSS' },
        { skill: 'React JS' },
        { skill: 'UI/UX' },
    ];

    const backLanguage = [
        { skill: 'C++' },
        { skill: 'PHP' },
        { skill: 'Python' },
    ];

    const renderSkillList = (skills) => {
        return (
            <div className="flex flex-wrap justify-between text-white w-full">
                {skills.map((item, index) => (
                    <div key={index} className="border-[1px] w-[10rem] h-auto rounded-lg mb-3">
                        <p className="text-center">{item.skill}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col text-white font-font1  text-center" id="skills">
            <p className="text-light text-3xl font-bold pb-5">Skills</p>
            <p className="text-lg font-bold pb-3">TRANSFERABLE SKILLS</p>
            {renderSkillList(skills)}
            <p className="text-lg font-bold pb-3">SOFTWARE</p>
            {renderSkillList(software)}
            <p className="text-lg font-bold pb-3">FRONT-END DEVELOPMENT</p>
            {renderSkillList(frontLanguage)}
            <p className="text-lg font-bold pb-3">BACK-END DEVELOPMENT</p>
            {renderSkillList(backLanguage)}
        </div>
    )
}

export default Skills