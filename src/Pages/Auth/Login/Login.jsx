import { FaGithub, FaGoogle } from "react-icons/fa";
import Title from "../../../Components/Title";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

function Login() {
    const { login, googleLogin, githubLogin } = useAuth();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        login(email, pass)
            .then((res) => {
                console.log(res);
                // api call
            })
            .catch((e) => console.error(e.message));

        form.reset();
    };

    const handleGoogle = () => {
        googleLogin()
            .then((res) => {
                console.log(res);
                toast.success("Google login success!");
                // api call
            })
            .catch((e) => toast.error(e.message));
    };

    const handleGithub = () => {
        githubLogin()
            .then((res) => {
                console.log(res);
                toast.success("Github login success!");
                // api call
            })
            .catch((e) => toast.error(e.message));
    };

    return (
        <div>
            <Title title={"Login"} />

            <div className="container mx-auto mt-10 flex items-center justify-center">
                <div className="flex w-full items-center gap-10 md:gap-16 flex-col-reverse md:flex-row">
                    <div className="border p-5 md:p-10 rounded-xl border-orange-600 shadow-xl md:w-[50%]">
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
                                    className="outline-none border-b-2 border-b-orange-600 rounded-lg py-2 px-4 w-full"
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
                                    className="outline-none border-b-2 border-b-orange-600 rounded-lg py-2 px-4 w-full"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="border w-full py-2 rounded-lg border-orange-600 text-lg font-bold hover:bg-orange-600 hover:text-white transition-all"
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
                                className="border p-1 md:p-2 rounded-full border-orange-600 text-orange-600 hover:text-white text-xl md:text-2xl transition-all hover:bg-orange-600"
                            >
                                <FaGoogle />
                            </button>

                            <button
                                onClick={handleGithub}
                                className="border p-1 md:p-2 rounded-full border-orange-600 text-orange-600 hover:text-white text-xl md:text-2xl transition-all hover:bg-orange-600"
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
