import { Link } from "react-router-dom";

function FoodCard() {
    return (
        <div className="border border-orange-600 rounded-lg p-3 md:p-4">
            <div className="w-full h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full absolute hover:scale-[1.05] rounded-lg transition-all hover:transform "
                    src="/banner.webp"
                    alt=""
                />
            </div>

            <div className="mt-4 px-4">
                <div className="flex items-center justify-between flex-row-reverse">
                    <h6 className="text-sm text-orange-600 font-bold text-right">
                        Category
                    </h6>

                    <h1 className="text-2xl md:text-3xl font-bold">
                        Food Name
                    </h1>
                </div>

                <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                    <span className="text-lg text-black">Price: </span>
                    <i>$55</i>
                </h1>

                <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                    <span className="text-lg text-black">Quantity: </span>
                    <i>55</i>
                </h1>

                <Link to={"/"}>
                    <button className="border w-full text-center py-2 rounded-lg border-orange-600 shadow-lg text-lg font-bold hover:bg-orange-600 hover:text-white transition-all mt-5">
                        Details Button
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FoodCard;
