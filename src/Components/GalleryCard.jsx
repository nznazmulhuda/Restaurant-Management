import { useState } from "react";
import PropTypes from "prop-types";

function GalleryCard({ gallery }) {
    const [isHover, setIsHover] = useState(false);
    const { name, imageUrl, feedback } = gallery;
    return (
        <div data-aos="fade-down" data-aos-offset="0">
            <div className="relative overflow-hidden w-full h-[30vh] rounded-lg transition-all">
                <img
                    className="w-full h-full absolute transition-all hover:scale-[1.05] hover:transform rounded-lg"
                    src={imageUrl}
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
                        {name}
                    </h1>

                    <p className="text-center w-3/4 text-white">{feedback}</p>
                </div>
            </div>
        </div>
    );
}

GalleryCard.propTypes = {
    gallery: PropTypes.object,
};

export default GalleryCard;
