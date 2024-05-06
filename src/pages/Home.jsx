import Eirie from "../assets/eirie.png"

const Home = () => {
    return (
        <div className="flex flex-col text-white items-center text-center font-font1" id="home">
            <p className="text-light text-3xl font-bold mb-5">Home</p>
            <p className="text-xl mb-2">WELCOME! My name is</p>
            <p className="text-7xl font-font2">Ariz Ann C. Salazar</p>
            <img src={Eirie} alt="Ariz Picture" className="w-72" />
            <p className="mb-5">UI/UX/Graphic Designer and Frontend Developer</p>
            <a href="https://www.canva.com/design/DAF6wRQfInU/sMB2HVFAXpSuFPKsjYLUlA/view?utm_content=DAF6wRQfInU&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                <button className="bg-gradient-to-b from-light to-dark py-2 px-5 rounded-xl shadow-lg">VIEW CURRICULUM VITAE</button>
            </a>
            <br />
        </div>
    )
}

export default Home