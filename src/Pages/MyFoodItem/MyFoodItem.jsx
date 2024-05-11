import Title from "../../Components/Title";
import MyFoodCard from "../../Components/MyFoodCard";

function MyFoodItem() {
    const user = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            <Title title={"Food you are added"} />

            <div className="container mx-auto mt-10 grid grid-cols-4 gap-5 md:gap-10">
                <div className="col-span-3">
                    {user.map((data) => (
                        <MyFoodCard data={data} key={data} />
                    ))}
                </div>

                <div>
                    <div className="border col-span-1 rounded-xl p-5 md:p-10">
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
                                className="outline-none border border-orange-600 rounded-lg py-2 px-3 w-full cursor-not-allowed"
                            />

                            <button className="border w-full py-2 mt-5 border-orange-600 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-all">
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
