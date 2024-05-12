import Title from "../../Components/Title";
import MyFoodCard from "../../Components/MyFoodCard";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "rsuite";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

function MyFoodItem() {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const { data, isPending } = useQuery({
        queryKey: ["myFood"],
        queryFn: () => axios.get(`/foods?email=${user?.email}`),
    });

    useEffect(() => {
        if (data) {
            setFoods(data.data);
        }
    }, [data]);
    return (
        <div>
            <Title title={"Food you are added"} />

            <div className="container mx-auto mt-10 grid md:grid-cols-4 gap-5 md:gap-10">
                <div className="md:col-span-3">
                    {foods.length ? (
                        foods.map((data) => (
                            <MyFoodCard data={data} key={data._id} />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center mt-5 md:mt-10 gap-4 md:gap-8">
                            <h1 className="text-center text-black text-5xl md:text-6xl">
                                No food found.
                            </h1>
                            <Link
                                to={"/add-food"}
                                className="hover:no-underline"
                            >
                                <button className="text-black text-2xl md:text-3xl border py-2 px-4 rounded-lg border-green-600 hover:bg-green-600 hover:text-white transition-all font-bold">
                                    Add food
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

                <div>
                    <div className="border md:col-span-1 rounded-xl p-5 md:p-10">
                        <div className=" flex items-center justify-center">
                            <img
                                className="w-32 md:w-36"
                                src="/logo.jpg"
                                alt=""
                            />
                        </div>

                        <div className="mt-5">
                            <input
                                type="text"
                                value={"Nazmul Huda Nahid"}
                                disabled
                                className="outline-none border border-green-600 rounded-lg py-2 px-3 w-full cursor-not-allowed"
                            />

                            <button className="border w-full py-2 mt-5 border-green-600 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-all">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyFoodItem;
