import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyFoodCard({ data }) {
    const { foodName, foodPrice, _id, url } = data;
    return (
        <div className={`animate__animated animate__fadeInLeft`}>
            <div className="flex items-center gap-5 md:gap-10 p-4 border rounded-xl shadow-lg">
                <div className="w-32 md:w-36">
                    <img className="w-full h-full" src={url} alt="" />
                </div>

                <div className="flex items-center justify-between w-full">
                    <div>
                        <h4>{foodName}</h4>
                        <h3>
                            <i>$ {foodPrice}</i>
                        </h3>
                    </div>

                    <Link to={`/update/${_id}`}>
                        <button className="border py-2 px-4 rounded-lg text-lg font-bold border-[#cd9232bb] hover:bg-[#cd9232bb] hover:text-white transition-all mr-5 text-black">
                            Update
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

MyFoodCard.propTypes = {
    data: PropTypes.object,
};

export default MyFoodCard;
