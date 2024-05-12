import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Title from "../../Components/Title";
import { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard";
import Paginations from "../../Components/Paginations";

function AllFood() {
    const [foods, setFoods] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [activePage, setActivePage] = useState(1);
    // Search Function
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        // get search foo
        axios.get(`/foods?search=${search}`).then((res) => setFoods(res.data));
        e.target.reset();
    };
    // get total page number
    useEffect(() => {
        axios
            .get(`foods?page=${true}`)
            .then((res) => setTotalPage(res.data.pages));
    }, []);
    // get limited data according page number
    useEffect(() => {
        axios
            .get(`/foods?activePage=${activePage}&pageNo=${activePage}`)
            .then((res) => {
                setFoods(res.data);
            });
    }, [activePage]);

    return (
        <div>
            <Title title={"All Foods"} />

            {/* Search functionality */}
            <form
                onSubmit={handleSearch}
                className="flex items-center justify-center"
            >
                <div className="flex justify-between items-center px-3 mt-10 border border-green-600 md:w-[40%] rounded-lg shadow-lg">
                    <input
                        type="search"
                        name="search"
                        placeholder="Food name..."
                        className="outline-none flex-1 border-none py-2 px-3"
                        required
                    />
                    <button>
                        <FaSearch className="text-green-600 text-lg cursor-pointer" />
                    </button>
                </div>
            </form>

            {/* All Food */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 container mx-auto mt-10">
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center mt-5 md:mt-10">
                <Paginations
                    total={totalPage}
                    setActivePage={setActivePage}
                    activePage={activePage}
                />
            </div>
        </div>
    );
}

export default AllFood;
