import Lottie from "react-lottie";
import Error from "../../assets/404.json";

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
        <div className="w-full h-[60vh] mt-10">
            <Lottie options={defaultOptions} />
        </div>
    );
}

export default ErrorPage;
