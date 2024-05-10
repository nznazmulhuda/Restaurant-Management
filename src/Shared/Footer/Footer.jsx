import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-center text-center gap-5 md:gap-0 border-t-2 border-orange-600 rounded-lg lg:rounded-[50px] py-4 mt-10">
            <Link
                to={"/"}
                className="flex items-center justify-center flex-col"
            >
                <div className="w-14 md:w-16 lg:w-20">
                    <img
                        className="w-full h-full cursor-pointer"
                        src="/logo.jpg"
                        alt="logo"
                    />
                </div>

                <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                    Dish Dash
                </h1>
            </Link>

            <div>
                <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-5">
                    Contact
                </h1>

                <div>
                    <h1 className="font-bold">
                        Phone:{" "}
                        <span className="font-normal cursor-pointer hover:underline">
                            +8801580507352
                        </span>
                    </h1>
                    <h1 className="font-bold">
                        E-mail:{" "}
                        <span className="font-normal cursor-pointer hover:underline">
                            jamal@kuddus.com
                        </span>
                    </h1>
                </div>
            </div>

            <div>
                <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-5">
                    Address
                </h1>

                <h1 className="font-bold w-3/4 mx-auto">
                    Location:{" "}
                    <span className="font-normal cursor-pointer hover:underline">
                        Mizmizi Dokkhin Para, Siddhirganj, Narayanganj
                    </span>
                </h1>
            </div>

            <div className="">
                <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-5">
                    Social
                </h1>

                <div className="flex items-center justify-center gap-4 w-3/4 mx-auto">
                    <h1 className="border p-2 rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                        <FaFacebookF className="text-xl md:text-2xl" />
                    </h1>

                    <h1 className="border p-2 rounded-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all cursor-pointer">
                        <FaInstagram className="text-xl md:text-2xl" />
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
