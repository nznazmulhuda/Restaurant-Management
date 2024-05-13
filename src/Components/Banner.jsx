import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import { TypeAnimation } from "react-type-animation";

function Banner() {
    const des = `At Dish Dash, we believe that every meal is a
    celebration of flavor, tradition, and togetherness. Join
    us on a culinary journey where we blend the finest
    ingredients with time-honored techniques to create
    dishes that inspire and delight. From our carefully
    curated menus to our warm and welcoming atmosphere, we
    invite you to indulge in the art of dining and create
    lasting memories with every bite. Experience the joy of
    culinary excellence at Dish Dash.`;
    const heading = [
        "Savor Every Moment: A Culinary Journey Awaits",
        1000,
        "Elevate Your Senses: Discover the Art of Dining",
        1000,
        "Taste the Extraordinary: Where Every Bite Tells a Story",
    ];
    return (
        <div className="relative">
            {/* backgoround */}
            <div
                className={`${styles.banner} animate__animated animate__fadeIn w-full h-[100vh] md:h-[60vh] lg:h-[70vh]`}
            ></div>
            {/* Hero section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 md:grid-cols-2 w-full gap-4 px-4">
                {/* Left content */}
                <div className="flex flex-col items-center justify-center px-0 md:px-10">
                    {/* Heading title */}
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-black lg:h-[4vh]">
                        <TypeAnimation
                            sequence={heading}
                            deletionSpeed={90}
                            speed={40}
                        />
                    </h1>

                    {/* Description */}
                    <p className="text-[#000000db] font-semibold leading-5 mb-4 text-[12px]">
                        <TypeAnimation
                            splitter={(str) => str.split(/(?= )/)}
                            sequence={[des]}
                            speed={{ type: "keyStrokeDelayInMs", value: 50 }}
                            omitDeletionAnimation={true}
                            style={{
                                fontSize: "1em",
                            }}
                        />
                    </p>

                    <Link to={"/foods"} className="mt-5">
                        <button className="border rounded-lg py-2 px-6 font-extrabold border-green-950 hover:bg-green-950 hover:text-white hover:font-medium transition-all text-green-950 text-xl">
                            All Foods
                        </button>
                    </Link>
                </div>

                {/* Right content */}
                <div className="md:p-3 rounded-lg animate__animated animate__fadeInDown">
                    <img
                        className="w-full h-full -rotate-2 hover:rotate-0 transition-all opacity-85 rounded-lg"
                        src="/banner.webp"
                        alt="banner image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
