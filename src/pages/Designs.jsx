import { ProjectInfo } from "../components/ProjectInfo"

const Designs = () => {
    return (
        <div className="text-white font-font1 text-center" id="designs">
            <div className="flex flex-col">
                <p className="text-light text-3xl font-bold pt-3">Designs</p>
            </div>
            <div className="text-white w-full">
                {ProjectInfo.map((value, index) => (
                    <div key={index}>
                        <p className="text-xl font-bold text-center mt-5">{value.label}</p>
                        <div className="my-3">
                            <img src={value.img} alt="Project" />
                        </div>
                        <p className="text-justify">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Designs