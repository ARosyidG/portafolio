import Image from "next/image";

export default function AboutContainer() {
    return(
        <div className="grid md:grid-cols-2">
            <div className="px-10 py-2 md:max-h-96 text-clip overflow-hidden border-l">
                <div>
                    <h2>Born in 2000 in Lombok, Indonesia.</h2>
                    <br />
                    <p>I want to be a game developer.</p>
                    <p>I like rpg game.</p>
                    <br />
                    <p>love Learning things</p>
                </div>
            </div>
            <div className="px-10 py-2 md:max-h-96 text-clip overflow-hidden border-l">
                {/* <Image src="https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png" width={500} height={500} alt="" /> */}
            </div>
        </div>
    )

}