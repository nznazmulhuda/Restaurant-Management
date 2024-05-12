import { useEffect, useState } from "react";
import MyOrderedCard from "../../Components/MyOrderedCard";
import Title from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { Loader } from "rsuite";
import { Link } from "react-router-dom";

function MyOrderedFood() {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const { data, isPending, refetch } = useQuery({
        queryKey: ["myOrder"],
        queryFn: () => axios.get(`/purchase-food?email=${user.email}`),
    });

    useEffect(() => {
        if (data) {
            setFoods(data.data);
        }
    }, [data]);
    return (
        <div>
            <Title title={"Foods are you added"} />

            <div className="container mx-auto mt-10">
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
                            <button className="text-black text-2xl md:text-3xl border py-2 px-4 rounded-lg border-green-600 hover:bg-green-600 hover:text-white transition-all font-bold">
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
