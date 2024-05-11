import { useState } from "react";
import Title from "../../Components/Title";
import Swal from "sweetalert2";

function UpdateItem() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
    });
    const [url, setUrl] = useState(null);
    const [foodName, setFoodName] = useState("Food Name");
    const [foodCategory, setFoodCategory] = useState("Food Category");
    const [foodPrice, setFoodPrice] = useState("$Price");
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
            about,
        });

        // api call

        e.target.reset();
    };
    const handleDelete = () => {
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    console.log("delete");

                    // api call
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error",
                    });
                }
            });
    };

    return (
        <div>
            <Title title={`Update`} />

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center">
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
                                {/* <h5 className="mb-2">
                                    Origin:{" "}
                                    <span className="text-orange-600 font-bold">
                                        {foodOrigin}
                                    </span>
                                </h5> */}

                                <p className="mb-5">{about}</p>
                                <hr />
                                <div className="text-right">
                                    <button
                                        className="border border-orange-600 py-2 px-4 rounded-lg hover:bg-orange-600 hover:text-white font-bold transition-all"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
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
                            <label htmlFor="Food Price">Food Price</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Food price"
                                className="outline-none border border-orange-600 py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodPrice(e.target.value)}
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
