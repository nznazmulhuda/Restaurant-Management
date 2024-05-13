import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FoodCard({ food }) {
    const { _id, url, foodName, foodCategory, foodPrice, foodQuantity } = food;
    return (
        <div
            className="border border-green-600 rounded-lg p-3 md:p-4"
            data-aos="fade-down"
        >
            <div className="w-full h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full absolute hover:scale-[1.05] rounded-lg transition-all hover:transform "
                    src={url}
                    alt=""
                />
            </div>

            <div className="mt-4 px-4">
                <div className="flex items-center justify-between flex-row-reverse">
                    <h6 className="text-sm text-green-600 font-bold text-right">
                        {foodCategory}
                    </h6>

                    <h1 className="text-2xl md:text-3xl font-bold">
                        {foodName}
                    </h1>
                </div>

                <h1 className="text-xl md:text-2xl font-bold text-green-600 mt-2">
                    <span className="text-lg text-black">Price: </span>
                    <i>{foodPrice}</i>
                </h1>

                <h1 className="text-xl md:text-2xl font-bold text-green-600 mt-2">
                    <span className="text-lg text-black">Quantity: </span>
                    <i>{foodQuantity}</i>
                </h1>

                <Link to={`/food/${_id}`}>
                    <button className="border w-full text-center py-2 rounded-lg border-green-600 shadow-lg text-lg font-bold hover:bg-green-600 hover:text-white transition-all mt-5 text-black">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

FoodCard.propTypes = {
    food: PropTypes.object,
};

export default FoodCard;
