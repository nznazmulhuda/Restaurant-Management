import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import { FaSearch } from "react-icons/fa";
import FoodCard from "../../Components/FoodCard";

function AllFood() {
    const [searchText, setSearchText] = useState(null);
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        // api call
        e.target.reset();
    };

    useEffect(() => {
        console.log(searchText);
        // api call
    }, [searchText]);

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
                        onChange={(e) => setSearchText(e.target.value)}
                        required
                    />
                    <button>
                        <FaSearch className="text-orange-600 text-lg cursor-pointer" />
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 container mx-auto mt-10">
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </div>
    );
}

export default AllFood;
