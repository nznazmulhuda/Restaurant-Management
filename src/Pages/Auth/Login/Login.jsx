import axios from "axios";
import toast from "react-hot-toast";
import style from "./Login.module.css";
import useAuth from "../../../Hooks/useAuth";
import Title from "../../../Components/Title";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { login, googleLogin, githubLogin } = useAuth();
    // handle register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const pass = form.pass.value;
        const email = form.email.value;
        const user = { email };

        login(email, pass)
            .then(() => {
                axios
                    .post("/token", user, { withCredentials: true })
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
            <Title title={"Login"} />

            <div className="container mx-auto mt-10 flex items-center justify-center">
                <div className="flex w-full items-center gap-10 md:gap-16 flex-col-reverse md:flex-row">
                    <div className="border p-5 md:p-10 rounded-xl border-green-600 shadow-xl md:w-[50%]">
                        <form onSubmit={handleRegister}>
                            <div className="mb-5 md:mb-10">
                                <label htmlFor="email">
                                    Email<sup className="text-red-500">*</sup>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    name="email"
                                    required
                                    className="outline-none border-b-2 border-b-green-600 rounded-lg py-2 px-4 w-full"
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
                                    className="outline-none border-b-2 border-b-green-600 rounded-lg py-2 px-4 w-full"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="border w-full py-2 rounded-lg border-green-600 text-lg font-bold hover:bg-green-600 hover:text-white transition-all"
                                >
                                    Login
                                </button>
                            </div>

                            <div className="text-center mt-2">
                                <Link to={"/register"}>
                                    <span className="underline">
                                        Do not have an account?
                                    </span>
                                </Link>
                            </div>
                        </form>

                        <hr />

                        <h6 className="-mt-3 text-center">Login with social</h6>

                        <div className="flex items-center gap-3 md:gap-5 justify-center mt-4">
                            <button
                                onClick={handleGoogle}
                                className="border p-1 md:p-2 rounded-full border-green-600 text-green-600 hover:text-white text-xl md:text-2xl transition-all hover:bg-green-600"
                            >
                                <FaGoogle />
                            </button>

                            <button
                                onClick={handleGithub}
                                className="border p-1 md:p-2 rounded-full border-green-600 text-green-600 hover:text-white text-xl md:text-2xl transition-all hover:bg-green-600"
                            >
                                <FaGithub />
                            </button>
                        </div>
                    </div>

                    <div
                        className={`${style.login} w-full md:w-3/4 h-[30vh] md:h-[37vh] lg:h-[43vh]`}
                    >
                        <div className="flex items-start md:items-end h-full">
                            <div className="p-5 md:p-10">
                                <h1 className="text-white">Get 40% off!</h1>
                                <p className="text-gray-300 font-semibold">
                                    You can choose any item and get 40% off.{" "}
                                    <br /> This offer is only for an hour.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
