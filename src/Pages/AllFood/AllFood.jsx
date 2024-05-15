import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Title from "../../Components/Title";
import { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard";
import Paginations from "../../Components/Paginations";
import { Helmet } from "react-helmet-async";
import Filter from "../../Components/Filter";

function AllFood() {
    const [foods, setFoods] = useState([]);
    const [totalPage, setTotalPage] = useState(null);
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    // Search Function
    function handleSearch(e) {
        e.preventDefault();
        const search = e.target.search.value;
        setSearchTerm(search);
        e.target.reset();
    }
    // get search data
    useEffect(() => {
        axios.get(`/search?search=${searchTerm || "all"}`).then((res) => {
            setFoods(res.data);
        });
    }, [searchTerm]);
    // get total page number
    useEffect(() => {
        axios
            .get(`/foods?page=${true}`)
            .then((res) => setTotalPage(res.data.pages));
    }, []);
    // get limited data according page number
    useEffect(() => {
        axios.get(`/foods?activePage=${activePage}`).then((res) => {
            setFoods(res.data.reverse());
        });
    }, [activePage]);

    return (
        <div className="w-full">
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | All Food</title>
            </Helmet>

            {/* banner for title */}
            <Title title={"All Foods"} />

            {/* Search functionality */}
            <div className="flex justify-between flex-col md:flex-row items-center container mx-auto mt-10">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center justify-center w-[90%] md:w-[70%] px-3 border border-[#cd9232bb] rounded-lg shadow-lg mb-5 md:mb-0 animate__animated animate__fadeInDown animate__delay-1s bg-white"
                >
                    <div className="flex justify-between items-center w-full">
                        <input
                            type="search"
                            name="search"
                            placeholder="Food name..."
                            className="outline-none flex-1 border-none py-2 px-3 w-full bg-transparent md:h-[4vh]"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            required
                        />
                        <button>
                            <FaSearch className="text-[#cd9232bb] text-lg cursor-pointer" />
                        </button>
                    </div>
                </form>

                <div>
                    <Filter setFoods={setFoods} />
                </div>
            </div>

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
