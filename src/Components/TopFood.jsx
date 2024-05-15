import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TopFood({ data }) {
    const { url, _id, foodName, foodCategory, foodPrice } = data;
    return (
        <div
            className="border-2 border-[#cd9232bb] shadow-lg p-3 rounded-lg"
            data-aos="fade-up"
            data-aos-offset="0"
        >
            <div className="h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full rounded-lg absolute hover:transform hover:scale-[1.04] transition-all cursor-pointer"
                    src={url}
                    alt=""
                />
                <span className="absolute top-5 right-5 bg-[#6f4f1b] text-white py-1 px-4 rounded-xl text-xl font-medium">
                    {foodCategory}
                </span>
            </div>

            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-5 text-black">
                    {foodName}
                </h1>

                <div className="flex justify-between">
                    <span className="font-bold hover:underline cursor-pointer text-3xl md:text-4xl italic text-[#cd9232c9] mt-3">
                        $ {foodPrice}
                    </span>
                </div>

                <hr className="my-3" />

                <Link to={`/food/${_id}`}>
                    <button className="border py-2 w-full rounded-lg border-[#cd9232bb] hover:bg-[#cd9232bb] hover:text-white transition-all font-bold text-lg text-black">
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
