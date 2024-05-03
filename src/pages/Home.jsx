import banner from "../assets/banner.png"

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: 'auto',
    };

    return (
        <div className="w-full h-full" style={backgroundImageStyle}>
            <div className="w-full h-screen flex flex-col">
                
            </div>
        </div>
    )
}

export default Home