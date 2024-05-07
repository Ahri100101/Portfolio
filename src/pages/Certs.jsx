import { CertInfo } from "../components/CertInfo"

const Certs = () => {
    return (
        <div className="text-white font-font1 text-center" id="certs">
            <div className="flex flex-col">
                <p className="text-light text-3xl font-bold pt-3">Certificates</p>
            </div>
            <div className="text-white w-full">
                {CertInfo.map((value, index) => (
                    <div key={index}>
                        <p className="text-xl font-bold text-center mt-5">{value.label}</p>
                        <div className="my-3">
                            <img src={value.img} alt="Certificate" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certs