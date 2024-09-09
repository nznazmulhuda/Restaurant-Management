import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Title from "../../../components/Title";
import { PiChefHatDuotone } from "react-icons/pi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { auth } from "../../../Firebase/Firebase.config";
import { Helmet } from "react-helmet-async";

function Register() {
    const { register, googleLogin, githubLogin } = useAuth();
    const navigate = useNavigate();
    const { state } = useLocation();
    // hangle register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const pass = form.pass.value;
        // Register account with email and pass
        register(email, pass)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                });
                // Save email and user name on the database
                const user = { email, name };
                axios.post("/users", user).then((data) => {
                    if (data.data.insertedId) {
                        toast.success("Account created!");
                    }
                });
                axios
                    .post("/token", { email }, { withCredentials: true })
                    .then((res) => {
                        if (res.data.success) {
                            toast.success("Welcome back!");
                            navigate(state ? state : "/");
                        }
                    });
            })
            .catch((e) => toast.error(e.message));
        form.reset();
    };
    // Login / Register account using google
    const handleGoogle = () => {
        googleLogin()
            .then((res) => {
                // Save email and user name on the database
                const name = res.user.displayName;
                const email = res.user.email;
                const user = { name, email };
                axios.post("/users", user).then((data) => {
                    if (data.data.insertedId) {
                        toast.success("Google login success!");
                    }
                });
                axios
                    .post("/token", { email }, { withCredentials: true })
                    .then((res) => {
                        if (res.data.success) {
                            navigate(state ? state : "/");
                        }
                    });
            })
            .catch((e) => toast.error(e.message));
    };
    // Login / Register account using github
    const handleGithub = () => {
        githubLogin()
            .then((res) => {
                // Save email and user name on the database
                const name = res.user.displayName;
                const email = res.user.email;
                const user = { name, email };
                axios.post("/users", user).then((data) => {
                    if (data.data.insertedId) {
                        toast.success("Github login success!");
                    }
                });
                axios
                    .post("/token", { email }, { withCredentials: true })
                    .then((res) => {
                        if (res.data.success) {
                            navigate(state ? state : "/");
                        }
                    });
            })
            .catch((e) => toast.error(e.message));
    };

    return (
        <div>
            {/* Title for this page */}
            <Helmet>
                <title>Dish Dash | Register</title>
            </Helmet>

            {/* Banner for title */}
            <Title title={"Register"} />

            <div className="container mx-auto mt-10 flex items-center justify-center">
                <div className="flex items-center gap-10 md:gap-16 flex-col-reverse md:flex-row w-full">
                    <div className="border p-5 md:p-10 rounded-xl border-[#cd9232bb] shadow-xl md:w-[50%] animate__animated animate__fadeInLeft">
                        <form onSubmit={handleRegister}>
                            <div className="mb-5 md:mb-10">
                                <label htmlFor="name">
                                    Name<sup className="text-red-500">*</sup>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    required
                                    className="outline-none border-b-2 border-b-[#cd9232bb] rounded-lg py-2 px-4 w-full"
                                />
                            </div>

                            <div className="mb-5 md:mb-10">
                                <label htmlFor="email">
                                    Email<sup className="text-red-500">*</sup>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    name="email"
                                    required
                                    className="outline-none border-b-2 border-b-[#cd9232bb] rounded-lg py-2 px-4 w-full"
                                />
                            </div>
                            <div className="mb-5 md:mb-10">
                                <label htmlFor="photoUrl">
                                    Photo URL
                                    <sup className="text-red-500">*</sup>
                                </label>
                                <input
                                    type="url"
                                    placeholder="Photo URL"
                                    name="photoURL"
                                    required
                                    className="outline-none border-b-2 border-b-[#cd9232bb] rounded-lg py-2 px-4 w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="pass">
                                    Password
                                    <sup className="text-red-500">*</sup>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="pass"
                                    required
                                    className="outline-none border-b-2 border-b-[#cd9232bb] rounded-lg py-2 px-4 w-full"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="border w-full py-2 rounded-lg border-[#cd9232bb] text-lg font-bold hover:bg-[#cd9232bb] hover:text-white transition-all"
                                >
                                    Register
                                </button>
                            </div>

                            <div className="text-center mt-2">
                                <Link to={"/login"}>
                                    <span className="underline">
                                        Already have an account?
                                    </span>
                                </Link>
                            </div>
                        </form>

                        <hr />

                        <h6 className="-mt-3 text-center">
                            Register with social
                        </h6>

                        <div className="flex items-center gap-3 md:gap-5 justify-center mt-4">
                            <button
                                onClick={handleGoogle}
                                className="border p-1 md:p-2 rounded-full border-[#cd9232bb] text-[#cd9232bb] hover:text-white text-xl md:text-2xl transition-all hover:bg-[#cd9232bb]"
                            >
                                <FaGoogle />
                            </button>

                            <button
                                onClick={handleGithub}
                                className="border p-1 md:p-2 rounded-full border-[#cd9232bb] text-[#cd9232bb] hover:text-white text-xl md:text-2xl transition-all hover:bg-[#cd9232bb]"
                            >
                                <FaGithub />
                            </button>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">
                        <h3 className="text-black">Create Account</h3>
                        <p>What you will get?</p>

                        <div className="mt-5 md:mt-8">
                            <div className="flex items-center gap-5 md:gap-7 mb-5">
                                <div>
                                    <PiChefHatDuotone className="text-xl md:text-2xl" />
                                </div>
                                <p>Manage your recipes the easy way</p>
                            </div>

                            <div className="flex items-center gap-5 md:gap-7 mb-5">
                                <div>
                                    <PiChefHatDuotone className="text-xl md:text-2xl" />
                                </div>
                                <p>
                                    Share recipes with your friends and discover
                                    new ones.
                                </p>
                            </div>
                            <div className="flex items-center gap-5 md:gap-7 mb-5">
                                <div>
                                    <PiChefHatDuotone className="text-xl md:text-2xl" />
                                </div>
                                <p>
                                    More than 15,000 recipes from around the
                                    world!
                                </p>
                            </div>
                            <div className="flex items-centergap-5 md:gap-7 mb-5">
                                <div>
                                    <PiChefHatDuotone className="text-xl md:text-2xl" />
                                </div>
                                <p>
                                    Organize recipes by tag, share it with your
                                    friends
                                </p>
                            </div>
                            <div className="flex items-center gap-5 md:gap-7 mb-5">
                                <div>
                                    <PiChefHatDuotone className="text-xl md:text-2xl" />
                                </div>
                                <p>
                                    Invite your friends to join and start
                                    sharing your recipes in a flash.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
