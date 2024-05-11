import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import { FaSearch } from "react-icons/fa";
import FoodCard from "../../Components/FoodCard";
import axios from "axios";

function AllFood() {
    const [foods, setFoods] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        // get search foo
        axios.get(`/foods?search=${search}`).then((res) => setFoods(res.data));
        e.target.reset();
    };

    useEffect(() => {
        axios.get("/foods").then((res) => setFoods(res.data.reverse()));
    }, []);

    return (
        <div>
            <Title title={"All Foods"} />

            <form
                onSubmit={handleSearch}
                className="flex items-center justify-center"
            >
                <div className="flex justify-between items-center px-3 mt-10 border border-orange-600 md:w-[40%] rounded-lg shadow-lg">
                    <input
                        type="search"
                        name="search"
                        placeholder="Food name..."
                        className="outline-none flex-1 border-none py-2 px-3"
                        required
                    />
                    <button>
                        <FaSearch className="text-orange-600 text-lg cursor-pointer" />
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 container mx-auto mt-10">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
}

export default AllFood;
