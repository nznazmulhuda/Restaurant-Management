import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Purchase() {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [food, setFood] = useState([]);
    const [isQuantity, setIsQuantity] = useState(false);
    // get data
    useEffect(() => {
        axios.get(`/foods?id=${id}`).then((res) => {
            setFood(res.data[0]);
        });
    }, [id]);
    // destructureing
    const {
        url,
        foodName,
        foodPrice,
        name: authorName,
        _id,
        email: mail,
        foodQuantity,
    } = food;
    // handle purchase
    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = new Date();
        const time = date.toLocaleString();
        // destructuring
        const food = {
            foodName,
            price,
            quantity,
            name,
            email,
            time,
            url,
            authorName,
        };

        // checking user mail and author mail
        if (mail === email) {
            toast.error("This item is yours!");
            navigate(`/food/${_id}`);
        } else if (foodQuantity === 0) {
            // checking food quantity is zero or not
            setIsQuantity(true);
            return toast.error("This food is unavailable!");
        } else if (foodQuantity < quantity) {
            // checking food quantity is less than user quantity
            return toast.error("Please decrease your quantity!");
        } else if (mail !== email) {
            // checking user mail and author mail, also get data
            axios.post(`/purchase-food?id=${_id}`, food).then((res) => {
                if (res.data.insertedId) {
                    toast.success("Purchase done!!!");
                    navigate("/my-ordered-food");
                }
            });
        }
    };
    // handle price ui when quantity field is onChange
    const handlePrice = (e) => {
        const q = e.target.value;
        const p = parseFloat(foodPrice.slice(1)).toFixed(2);
        document.getElementById("price").value = `$ ${q * p}`;
    };

    return (
        <div>
            <Helmet>
                <title>Dish Dash | Purchase</title>
            </Helmet>

            <Title title={"Purchase"} />

            <div className="flex justify-center flex-col md:flex-row container mx-auto mt-10 items-center gap-5 md:gap-8">
                <div className="grid grid-cols-1 container mx-auto rounded-xl gap-5 md:gap-7">
                    <div className="flex items-center">
                        <div className="w-full md:h-[40vh] relative overflow-hidden rounded-lg">
                            <img
                                className="w-full h-full rounded-lg transition-all hover:scale-[1.05]"
                                src={url}
                                alt=""
                            />
                            <div
                                className={`absolute top-0 left-0 bg-[#0000007e] w-full h-full ${
                                    isQuantity ? "flex" : "hidden"
                                } items-center justify-center`}
                            >
                                <h3 className=" text-red-500 -rotate-[30deg] text-5xl md:text-7xl">
                                    Unavailable
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-between flex-row">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                {foodName}
                            </h1>

                            <h1 className="text-xl md:text-2xl font-bold text-green-600 mt-2">
                                <span className="text-lg text-black">
                                    Price:{" "}
                                </span>
                                <i>{foodPrice}</i>
                            </h1>
                        </div>
                    </div>
                </div>

                <form onSubmit={handlePurchase} className="container mx-auto">
                    <div className="mb-5">
                        <label htmlFor="Food name">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            placeholder={`Food name`}
                            className="outline-none border border-green-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
                            defaultValue={foodName}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Price">Price</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            placeholder={`Price`}
                            className="outline-none border border-green-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
                            defaultValue={foodPrice}
                            disabled
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Quantity">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder={`Quantity`}
                            className="outline-none border border-green-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
                            defaultValue={1}
                            onChange={handlePrice}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Your name">Your name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder={`Your name`}
                            className="outline-none border border-green-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2 cursor-not-allowed"
                            value={user.displayName}
                            disabled
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Your email">Your email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder={`Your email`}
                            className="outline-none border border-green-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2 cursor-not-allowed"
                            value={user.email}
                            disabled
                        />
                    </div>

                    <button
                        type="submit"
                        className="border w-full py-2 border-green-600 rounded-lg shadow-lg text-lg hover:bg-green-600 hover:text-white font-bold transition-all"
                        disabled={isQuantity ? true : false}
                    >
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Purchase;
