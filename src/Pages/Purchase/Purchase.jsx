import toast from "react-hot-toast";
import Title from "../../Components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [food, setFood] = useState([]);
    useEffect(() => {
        axios.get(`/foods?id=${id}`).then((res) => {
            setFood(res.data[0]);
        });
    }, [id]);
    const { url, foodName, foodPrice } = food;
    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        const time = new Date();
        console.log({ foodName, price, quantity, name, email, time });
        toast.success("Purchase done!!!");

        // api call

        navigate("/my-ordered-food");
    };
    const handlePrice = (e) => {
        const q = e.target.value;
        const p = parseFloat(foodPrice.slice(1)).toFixed(2);
        document.getElementById("price").value = `$ ${q * p}`;
    };

    return (
        <div>
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
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-between flex-row">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                {foodName}
                            </h1>

                            <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
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
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
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
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
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
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
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
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2 cursor-not-allowed"
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
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2 cursor-not-allowed"
                            value={user.email}
                            disabled
                        />
                    </div>

                    <button
                        type="submit"
                        className="border w-full py-2 border-orange-600 rounded-lg shadow-lg text-lg hover:bg-orange-700 hover:text-white font-bold transition-all"
                    >
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Purchase;
