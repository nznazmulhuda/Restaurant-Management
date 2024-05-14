/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Filter({ setFoods }) {
    const [price, setPrice] = useState(null);
    const [categoryTerm, setCategoryTerm] = useState(null);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get(`/filter?price=${price}&category=${categoryTerm}`)
            .then((res) => {
                setFoods(res.data);
            });
    }, [price, categoryTerm]);
    useEffect(() => {
        axios.get("/category").then((res) => setCategory(res.data));
    }, []);
    return (
        <>
            <div className="flex items-center justify-between md:justify-start text-center">
                <div>
                    <label
                        htmlFor="price"
                        className="text-xl md:text-2xl mr-2 font-bold "
                    >
                        Price:
                    </label>
                    <select
                        name="price"
                        className="outline-none border py-2 px-4 rounded-lg"
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="default">Filter</option>
                        <option value="highToLow">High To Low</option>
                        <option value="lowToHigh">Low to High</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="text-xl md:text-2xl mr-2 font-bold ml-5"
                    >
                        Category:
                    </label>
                    <select
                        name="category"
                        className="outline-none border py-2 px-4 rounded-lg"
                        onChange={(e) => setCategoryTerm(e.target.value)}
                    >
                        <option value="default">Filter</option>
                        {category.map((cat) => (
                            <option value={cat} key={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

Filter.propTypes = {
    setFoods: PropTypes.func,
};
