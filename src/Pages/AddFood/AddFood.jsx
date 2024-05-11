import Title from "../../Components/Title";
import { useState } from "react";

function AddFood() {
    const [url, setUrl] = useState(null);
    const [foodName, setFoodName] = useState("Food Name");
    const [foodCategory, setFoodCategory] = useState("Food Category");
    const [foodPrice, setFoodPrice] = useState("$Price");
    const [foodOrigin, setFoodOrigin] = useState("Origin");
    const [foodQuantity, setFoodQuantity] = useState(0);
    const [about, setAbout] = useState("About food is here");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            url,
            foodName,
            foodCategory,
            foodPrice,
            foodQuantity,
            foodOrigin,
            about,
        });

        // api call

        e.target.reset();
    };
    return (
        <div>
            <Title title={`Add Food`} />

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center justify-center">
                    <div className="w-full mb-5 md:mb-0">
                        <h3 className="text-center mb-5">Preview</h3>
                        <div className="border rounded-xl p-5 w-full">
                            <div className="w-full h-[20vh]">
                                <img
                                    className="w-full h-full rounded-xl"
                                    src={url}
                                    alt=""
                                />
                            </div>

                            <div className="px-5 md:px-10 mt-5">
                                <div className="flex items-center justify-between">
                                    <h4 className="mb-4">{foodName}</h4>
                                    <p>{foodCategory}</p>
                                </div>
                                <h3>
                                    <i>{foodPrice}</i>
                                </h3>
                                <h5 className="mb-2">
                                    Quantity:{" "}
                                    <span className="text-orange-600 font-bold">
                                        {foodQuantity}
                                    </span>
                                </h5>
                                <h5 className="mb-2">
                                    Origin:{" "}
                                    <span className="text-orange-600 font-bold">
                                        {foodOrigin}
                                    </span>
                                </h5>

                                <p className="mb-5">{about}</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="col-span-2">
                        <div className="mb-5">
                            <label htmlFor="Food Image">Food Image</label>
                            <input
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food image URL"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Name">Food Name</label>
                            <input
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodName(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Category">Food Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Food category"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodCategory(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Price">Food Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Food price"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Quantity">Food Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Food quantity"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodQuantity(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="origin">Food Origin</label>
                            <input
                                type="text"
                                name="origin"
                                placeholder="Tell us about your food"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                onChange={(e) => setFoodOrigin(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="About">About Food</label>
                            <textarea
                                type="text"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                disabled
                                value={`nznazmulhuda@gmailcom`}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tell us about your food"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                value={`Nazmul Huda`}
                                disabled
                            />
                        </div>

                        <button
                            type="submit"
                            className="border border-orange-600 py-2 w-full rounded-lg text-lg hover:bg-orange-600 hover:text-white font-bold transition-all"
                        >
                            Add Food
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFood;
