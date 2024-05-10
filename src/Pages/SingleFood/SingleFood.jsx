import { Link } from "react-router-dom";

function SingleFood() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto border rounded-xl p-5 md:p-10 border-orange-600 shadow-lg gap-5 md:gap-7">
            <div className="flex items-center">
                <div className="w-full md:h-[40vh] lg:h-[25vh] relative overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full rounded-lg transition-all hover:scale-[1.05]"
                        src="/banner.webp"
                        alt=""
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between flex-row-reverse">
                    <h6 className="text-sm text-orange-600 font-bold text-right">
                        Category
                    </h6>

                    <h1 className="text-2xl md:text-3xl font-bold">
                        Food Name
                    </h1>
                </div>

                <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    quia dolore explicabo illum! Praesentium quod, dolor rem
                    vitae incidunt, fugiat quibusdam aliquid illo doloribus,
                    explicabo accusantium excepturi ratione iste eius!
                </p>

                <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                    <span className="text-lg text-black">Price: </span>
                    <i>$55</i>
                </h1>

                <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                    <span className="text-lg text-black">Made By: </span>
                    <i>Nahid</i>
                </h1>

                <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                    <span className="text-lg text-black">Food Origin: </span>
                    <i>Bangladesh</i>
                </h1>

                <Link to={"/"}>
                    <button className="border w-full text-center py-2 rounded-lg border-orange-600 shadow-lg text-lg font-bold hover:bg-orange-600 hover:text-white transition-all mt-5 text-black">
                        Purchase
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SingleFood;
