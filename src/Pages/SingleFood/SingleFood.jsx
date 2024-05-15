import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Title from "../../Components/Title";

function SingleFood() {
    const { id } = useParams();
    const [food, setFood] = useState([]);
    // get data
    useEffect(() => {
        axios.get(`/foods?id=${id}`).then((res) => setFood(res.data[0]));
    }, [id]);
    // destructuring
    const {
        _id,
        url,
        foodName,
        about,
        foodPrice,
        foodOrigin,
        foodCategory,
        name,
    } = food;

    return (
        <>
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | Single Food</title>
            </Helmet>

            {/* banner for title */}
            <Title title={foodName} />

            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto border rounded-xl p-5 md:p-10 border-[#cd9232bb] shadow-lg gap-5 md:gap-7 animate__animated animate__fadeInUp mt-10">
                <div className="flex items-center animate__animated animate__fadeInLeft animate__delay-1s">
                    <div className="w-full md:h-[60vh] lg:h-[50vh] relative overflow-hidden rounded-lg">
                        <img
                            className="w-full h-full rounded-lg transition-all hover:scale-[1.05]"
                            src={url}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between py-5 animate__animated animate__fadeInRight animate__delay-1s">
                    <div>
                        <div className="flex items-center justify-between flex-row-reverse">
                            <h6 className="text-sm text-[#cd9232bb] font-bold text-right">
                                {foodCategory}
                            </h6>

                            <h1 className="text-2xl md:text-3xl font-bold">
                                {foodName}
                            </h1>
                        </div>

                        <p className="mt-5">{about}</p>

                        <h1 className="text-xl md:text-2xl font-bold text-[#cd9232bb] mt-2">
                            <span className="text-lg text-black">Price: </span>
                            <i>$ {foodPrice}</i>
                        </h1>

                        <h1 className="text-xl md:text-2xl font-bold text-[#cd9232bb] mt-2">
                            <span className="text-lg text-black">
                                Made By:{" "}
                            </span>
                            <i>{name}</i>
                        </h1>

                        <h1 className="text-xl md:text-2xl font-bold text-[#cd9232bb] mt-2">
                            <span className="text-lg text-black">
                                Food Origin:{" "}
                            </span>
                            <i>{foodOrigin}</i>
                        </h1>
                    </div>

                    <Link to={`/purchase/${_id}`}>
                        <button className="border w-full text-center py-2 rounded-lg border-[#cd9232bb] shadow-lg text-lg font-bold hover:bg-[#cd9232bb] hover:text-white transition-all mt-5 text-black">
                            Purchase
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SingleFood;
