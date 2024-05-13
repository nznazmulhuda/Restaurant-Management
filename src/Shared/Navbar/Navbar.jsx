import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { IoIosRestaurant } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";

function Navbar() {
    const { user, logout } = useAuth();
    const [isHover, setIsHover] = useState(false);
    const [isMenus, setIsMenus] = useState(false);
    // handle logout
    const handleLogout = () => {
        logout()
            .then(() => {
                axios.get("/logout", { withCredentials: true }).then((res) => {
                    if (res.data.success) {
                        toast.success("Logout Success!");
                    }
                    console.log(res);
                });
            })
            .catch((e) => toast.error(e.message));
    };
    // navlinks
    const links = (
        <>
            <li>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? `font-semibold text-[12px] md:text-[14px] text-green-600 border-b border-b-green-600 focus:text-green-600 focus:no-underline hover:text-green-600 hover:no-underline`
                            : `font-semibold text-[12px] md:text-[14px] text-black border-b border-b-transparent hover:border-b-green-600 hover:text-black hover:no-underline transition-all`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={"/foods"}
                    className={({ isActive }) =>
                        isActive
                            ? `font-semibold text-[12px] md:text-[14px] text-green-600 border-b border-b-green-600 focus:text-green-600 focus:no-underline hover:text-green-600 hover:no-underline`
                            : `font-semibold text-[12px] md:text-[14px] text-black border-b border-b-transparent hover:border-b-green-600 hover:text-black hover:no-underline transition-all`
                    }
                >
                    All Foods
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={"/gallery"}
                    className={({ isActive }) =>
                        isActive
                            ? `font-semibold text-[12px] md:text-[14px] text-green-600 border-b border-b-green-600 focus:text-green-600 focus:no-underline hover:text-green-600 hover:no-underline`
                            : `font-semibold text-[12px] md:text-[14px] text-black border-b border-b-transparent hover:border-b-green-600 hover:text-black hover:no-underline transition-all`
                    }
                >
                    Gallery
                </NavLink>
            </li>
        </>
    );

    return (
        <nav
            className={`border-b-2 rounded-lg lg:rounded-[50px] py-2  border-b-green-500 shadow-lg px-4 mb-10 bg-white`}
        >
            <div className="grid grid-cols-3 items-center relative container mx-auto">
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-5 md:gap-10 flex-col md:flex-row">
                        {links}
                    </ul>
                </div>

                <div className="flex md:hidden">
                    <button className="rotate-90 text-2xl">
                        {isMenus ? (
                            <MdRestaurantMenu
                                onClick={() => setIsMenus(!isMenus)}
                            />
                        ) : (
                            <IoIosRestaurant
                                onClick={() => setIsMenus(!isMenus)}
                            />
                        )}
                    </button>
                </div>

                <div
                    className={`absolute ${
                        isMenus ? "flex" : "hidden"
                    } md:hidden flex-col top-full mt-3 gap-2 items-end border p-4 rounded-lg bg-gradient-to-br from-green-100 to-red-100 z-[9999] -ml-3`}
                >
                    <ul className="flex flex-col gap-2 text-left w-full">
                        {links}
                    </ul>

                    <div className="flex md:hidden">
                        <button
                            className="border border-green-600 rounded-lg px-4 py-2 font-bold hover:text-white hover:bg-green-600 transition-all"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <Link to={"/"} className="flex items-center justify-center">
                    <div className="w-14 md:w-16 lg:w-20">
                        <img
                            className="w-full h-full cursor-pointer"
                            src="/logo.jpg"
                            alt="logo"
                        />
                    </div>
                </Link>

                <div className="flex items-center justify-end">
                    {user ? (
                        <div className="flex items-center gap-5">
                            <div
                                className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16  border-2 border-green-600 rounded-full cursor-pointer"
                                onClick={() => setIsHover(!isHover)}
                            >
                                <img
                                    className="w-full h-full rounded-full p-1"
                                    src={user && user.photoURL}
                                    alt="profilePic"
                                />
                            </div>
                            <div className="hidden md:flex">
                                <button
                                    className="border border-green-600 rounded-lg px-4 py-2 font-bold hover:text-white hover:bg-green-600 transition-all"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to={"/login"}>
                            <button className="border border-green-600 rounded-lg px-4 py-2 font-bold hover:text-white hover:bg-green-600 transition-all text-black">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                <div
                    className={`absolute top-full right-0 flex-col gap-2 items-end border p-4 rounded-lg bg-gradient-to-br from-green-100 to-red-100 mt-3 z-[9999] ${
                        isHover ? "flex" : "hidden"
                    }`}
                >
                    <Link
                        to={"/my-food-item"}
                        className="font-semibold border w-full text-right py-1 px-3 rounded-lg bg-white text-black"
                    >
                        My added food items
                    </Link>
                    <Link
                        to={"/add-food"}
                        className="font-semibold border w-full text-right py-1 px-3 rounded-lg bg-white text-black"
                    >
                        Add a food items
                    </Link>
                    <Link
                        to={"/my-ordered-food"}
                        className="font-semibold border w-full text-right py-1 px-3 rounded-lg bg-white text-black"
                    >
                        My ordered food items
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
