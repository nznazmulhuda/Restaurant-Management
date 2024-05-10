import toast from "react-hot-toast";
import Title from "../../Components/Title";
import { Link } from "react-router-dom";

function Purchase() {
    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        console.log({ foodName, price, quantity, name, email });
        toast.success("Purchase done!!!");

        // api call

        form.reset();
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
                                src="/banner.webp"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex items-center justify-between flex-row">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Food Name
                            </h1>

                            <h1 className="text-xl md:text-2xl font-bold text-orange-600 mt-2">
                                <span className="text-lg text-black">
                                    Price:{" "}
                                </span>
                                <i>$55</i>
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
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Price">Price</label>
                        <input
                            type="text"
                            name="price"
                            placeholder={`Price`}
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Quantity">Quantity</label>
                        <input
                            type="text"
                            name="quantity"
                            placeholder={`Quantity`}
                            className="outline-none border border-orange-600 w-full rounded-lg shadow-lg py-2 px-3 mt-2"
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
                            value={"Nazmul Huda Nahid"}
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
                            value={"nahid@jidne.com"}
                            disabled
                        />
                    </div>

                    <button
                        type="submit"
                        className="border w-full py-2 border-orange-600 rounded-lg shadow-lg text-lg hover:bg-orange-700 hover:text-white font-bold transition-all"
                    >
                        purchase
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Purchase;
