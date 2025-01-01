import Image from "next/image";

export default function AboutContainer() {
    return (
        <div className="grid md:grid-cols-[75%_25%] text-nowrap">
            <div className="md:px-10 md:py-2 text-center md:text-left md:max-h-96 text-clip overflow-hidden md:border-l border-t border-slate-700 md:border-white md:border-t-0">
                <div className="my-4 flex w-auto flex-wrap md:flex-nowrap border md:border-0 p-10 md:p-0 border-slate-700 justify-center md:justify-normal items-center">
                    <div className="rounded-full overflow-hidden h-20 w-20">
                        <Image src="/Me.jpg" alt="Me" width={100} height={100}></Image>
                    </div>
                    <div className="md:ml-4">
                        <div className="sms:text-2xl">AHMAD ROSYID GANAUSI</div>
                        <div className="text-sm italic text-slate-500">Unemployed Programmer</div>
                    </div>
                </div>
                <div className="text-wrap my-3 md:my-0">
                    <h2>Born in 2000 in Lombok, Indonesia.</h2>
                    <br />
                    <p>I want to be a game developer.</p>
                    <p>I like RPG games.</p>
                    <br />
                    <p>Language: Indonesia, English, little bit of japanese</p>
                    <p>I love learning things.</p>
                    <div className="flex justify-center items-center md:justify-start md:items-start">
                        <div className="w-fit h-fit mx-2 rounded-xl overflow-hidden">
                            <a href="https://github.com/ARosyidG" target="_blank">
                                <Image src="/github-Logo.jpg" width={30} height={30} alt="github account"></Image>
                            </a>
                        </div>
                        <div className="w-fit h-fit mx-2 rounded-xl overflow-hidden">
                            <a href="https://www.instagram.com/ganausi/" target="_blank">
                                <Image src="/instagram-Logo.jpg" width={30} height={30} alt="github account"></Image>
                            </a>
                        </div>
                        <div className="w-fit h-fit mx-2 rounded-xl overflow-hidden">
                            <a href="https://www.youtube.com/@ganausi1194" target="_blank">
                                <Image src="https://raw.githubusercontent.com/ARosyidG/portafolio/refs/heads/main/public/youtube-logo.png" width={30} height={30} alt="Youtube account"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 md:max-h-96 text-clip overflow-hidden md:border-l border-t border-slate-700 md:border-white md:border-t-0">
                <div className="text-l mb-4">
                    Technology That I&apos;ve Use:
                </div>
                <div className="grid grid-cols-3 gap-1 grid-rows-3 aspect-[1/1]">
                    <div className="flex justify-center items-center col-span-2 bg-slate-50 p-1">
                        <Image src="/UnityLogo.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                    <div className="flex justify-center items-center bg-slate-400 p-1">
                        <Image src="/NextJs.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                    <div className="flex justify-center items-center bg-slate-50 p-1">
                        <Image src="/BlenderLogo.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                    <div className="flex justify-center items-center col-span-2 bg-slate-800 p-1">
                        <Image src="/springbootlogo.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                    <div className="flex justify-center items-center col-span-2 bg-slate-400 p-1">
                        <Image src="/LaravelLogo.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 p-1">
                        <Image src="/GodotLogo.png" width={200} height={200} alt="Unity"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}