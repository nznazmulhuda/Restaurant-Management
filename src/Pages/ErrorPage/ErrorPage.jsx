import Lottie from "react-lottie";
import Error from "../../assets/404.json";
import { Link } from "react-router-dom";

function ErrorPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Error,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="relative">
            <div className="absolute top-0 left-0">
                <Lottie options={defaultOptions} />
            </div>
            <Link
                to={"/"}
                className="absolute top-10 left-10 text-xl md:text-2xl lg:text-3xl font-bold underline"
            >
                Back to home
            </Link>
        </div>
    );
}

export default ErrorPage;
