import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className="relative">
            <div className={`${styles.banner}`}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 md:grid-cols-2 w-full gap-4 px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-black">
                        Immerse Yourself in Culinary Delight
                    </h1>
                    <p className="text-[#000000db] font-semibold leading-5 mb-4 text-[12px]">
                        At Dish Dash, we believe that every meal is a
                        celebration of flavor, tradition, and togetherness. Join
                        us on a culinary journey where we blend the finest
                        ingredients with time-honored techniques to create
                        dishes that inspire and delight. From our carefully
                        curated menus to our warm and welcoming atmosphere, we
                        invite you to indulge in the art of dining and create
                        lasting memories with every bite. Experience the joy of
                        culinary excellence at Dish Dash.
                    </p>
                    <Link to={"/foods"}>
                        <button className="border rounded-lg py-2 px-6 font-bold border-orange-600 hover:bg-orange-600 hover:text-white transition-all text-black">
                            All Foods
                        </button>
                    </Link>
                </div>

                <div className="md:p-3 rounded-lg">
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
