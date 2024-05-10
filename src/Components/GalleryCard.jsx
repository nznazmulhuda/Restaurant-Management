import { useState } from "react";

function GalleryCard() {
    const [isHover, setIsHover] = useState(false);
    return (
        <div>
            <div className="relative overflow-hidden w-full h-[30vh] rounded-lg transition-all">
                <img
                    className="w-full h-full absolute transition-all hover:scale-[1.05] hover:transform rounded-lg"
                    src="/banner.webp"
                    alt=""
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                />

                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                        isHover ? "flex" : "hidden"
                    } flex-col items-center justify-center gap-3 md:gap-5 bg-[#00000074] w-full h-full transition-all`}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        User Name
                    </h1>

                    <p className="text-center w-3/4 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores exercitationem molestiae, omnis ipsam
                        ducimus perferendis, aliquam provident laboriosam nisi
                        sunt odit accusantium ipsa autem quis iste animi magni
                        cumque excepturi?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GalleryCard;
