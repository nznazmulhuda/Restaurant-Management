import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TopFood({ data }) {
    const { url, _id, foodName, foodCategory, foodPrice } = data;
    return (
        <div className="border-2 border-green-300 shadow-lg p-3 rounded-lg">
            <div className="h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full rounded-lg absolute hover:transform hover:scale-[1.04] transition-all cursor-pointer"
                    src={url}
                    alt=""
                />
            </div>

            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-5 text-black">
                    {foodName}
                </h1>

                <div className="flex justify-between">
                    <h1 className="text-[13px]">
                        Category:{" "}
                        <span className="font-semibold hover:underline cursor-pointer">
                            {foodCategory}
                        </span>
                    </h1>

                    <h1 className="text-[13px]">
                        Price:{" "}
                        <span className="font-semibold hover:underline cursor-pointer">
                            {foodPrice}
                        </span>
                    </h1>
                </div>

                <hr className="my-3" />

                <Link to={`/food/${_id}`}>
                    <button className="border py-2 w-full rounded-lg border-green-600 hover:bg-green-600 hover:text-white transition-all font-bold text-lg text-black">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

TopFood.propTypes = {
    data: PropTypes.object,
};

export default TopFood;
