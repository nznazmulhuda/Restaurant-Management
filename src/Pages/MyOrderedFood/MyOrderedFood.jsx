import axios from "axios";
import { Loader } from "rsuite";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Title from "../../components/Title";
import { useQuery } from "@tanstack/react-query";
import MyOrderedCard from "../../components/MyOrderedCard";
import { Helmet } from "react-helmet-async";

function MyOrderedFood() {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    // get data
    const { isPending, refetch } = useQuery({
        queryKey: ["myOrder"],
        queryFn: () =>
            axios
                .get(`/purchase-food/${user.email}`, {
                    withCredentials: true,
                })
                .then((data) => {
                    setFoods(data.data);
                    return data.data;
                }),
    });

    return (
        <div>
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | My Order</title>
            </Helmet>

            {/* banner for title */}
            <Title title={"Foods are you added"} />

            <div className="container mx-auto mt-10 space-y-5">
                {foods.length ? (
                    foods.map((food) => (
                        <MyOrderedCard
                            key={food._id}
                            food={food}
                            refetch={refetch}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center mt-5 md:mt-10 gap-4 md:gap-8">
                        <h1 className="text-center text-black text-5xl md:text-6xl">
                            No food found.
                        </h1>
                        <Link to={"/foods"} className="hover:no-underline">
                            <button className="text-black text-2xl md:text-3xl border py-2 px-4 rounded-lg border-[#cd9232bb] hover:bg-[#cd9232bb] hover:text-white transition-all font-bold">
                                Purchase
                            </button>
                        </Link>
                    </div>
                )}
                {isPending && (
                    <div className="flex items-center justify-center mt-5 md:mt-10">
                        <Loader
                            size="lg"
                            content="Loading"
                            className="font-bold"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyOrderedFood;
