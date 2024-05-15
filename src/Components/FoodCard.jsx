import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FoodCard({ food }) {
    const { _id, url, foodName, foodCategory, foodPrice, foodQuantity } = food;
    return (
        <div
            className="border bg-white border-[#cd9232bb] rounded-lg p-3 md:p-4"
            data-aos="fade-down"
        >
            <div className="w-full h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full absolute hover:scale-[1.05] rounded-lg transition-all hover:transform "
                    src={url}
                    alt=""
                />
                <h6 className="text-sm text-white py-1 px-3 rounded-xl absolute top-5 right-5 bg-[#89601e] font-semibold text-right">
                    {foodCategory}
                </h6>
            </div>

            <div className="mt-4 px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        {foodName}
                    </h1>
                </div>

                <h1 className="text-4xl flex items-center justify-between md:text-5xl font-bold text-[#cd9232bb] mt-4">
                    <i>$ {foodPrice}</i>
                    <span className="text-xl md:text-2xl font-bold text-black italic">
                        {foodQuantity}{" "}
                        <span className="not-italic text-sm md:text-lg">
                            piece
                        </span>
                    </span>
                </h1>

                <Link to={`/food/${_id}`}>
                    <button className="border w-full text-center py-2 rounded-lg border-[#cd9232bb] shadow-lg text-lg font-bold hover:bg-[#cd9232bb] hover:text-white transition-all mt-5 text-black">
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
