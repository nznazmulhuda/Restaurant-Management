import Title from "../../Components/Title";

function UpdateItem() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImageUrl.value;
        const foodCategory = form.category.value;
        const foodQuantity = form.quantity.value;
        const foodPrice = form.price.value;
        const foodAbout = form.aboutFood.value;

        console.log({
            foodName,
            foodImage,
            foodCategory,
            foodQuantity,
            foodPrice,
            foodAbout,
        });

        // api call

        form.reset();
    };

    return (
        <div>
            <Title title={`Update`} />

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
                    <img
                        className="w-full h-[30vh] rounded-xl"
                        src={`/banner.webp`}
                        alt=""
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="Food Name">Food Name</label>
                            <input
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Image">Food Image</label>
                            <input
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food image URL"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Category">Food Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Food category"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Quantity">Food Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Food quantity"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Price">Food Price</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Food price"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="About">About Food</label>
                            <textarea
                                type="text"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="border border-orange-600 py-2 w-full rounded-lg text-lg hover:bg-orange-600 hover:text-white font-bold transition-all"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateItem;
