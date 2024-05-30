import { Link } from "react-router-dom";
import EventImg from "../assets/event.jpg";

function EventBanner() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-28 lg:px-52">
                <div className="flex flex-col items-center gap-4">
                    <div className="border w-40 h-40 lg:w-52 lg:h-52 text-center rounded-full relative border-black">
                        <h1 className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            JUNE 05
                        </h1>
                    </div>

                    <h4 className="text-black text-center">
                        Register a new event to be notified
                    </h4>

                    <div className="text-center mb-5 md:mb-0">
                        <Link to={"/event"}>
                            <button className="text-black border py-3 px-4 rounded-lg text-lg font-bold">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="md:h-[30vh]">
                    <img
                        className="w-full h-full rounded-xl"
                        src={EventImg}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default EventBanner;
