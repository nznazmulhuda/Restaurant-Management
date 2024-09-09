import axios from "axios";
import Swal from "sweetalert2";
import { Loader } from "rsuite";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Title from "../../components/Title";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function UpdateItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [about, setAbout] = useState("");
    const [foodName, setFoodName] = useState("");
    const [foodPrice1, setFoodPrice] = useState("");
    const [foodCategory, setFoodCategory] = useState("");
    const [foodQuantity1, setFoodQuantity] = useState("");
    // get data
    const { isPending } = useQuery({
        queryKey: ["update"],
        queryFn: () =>
            axios.get(`/foods?id=${id}`).then((data) => {
                const food = data?.data[0];
                setUrl(food.url);
                setFoodName(food.foodName);
                setFoodCategory(food.foodCategory);
                setFoodPrice(food.foodPrice);
                setFoodQuantity(food.foodQuantity);
                setAbout(food.about);
                return food;
            }),
    });
    // handle update
    const handleSubmit = (e) => {
        e.preventDefault();
        const foodPrice = parseInt(foodPrice1);
        const foodQuantity = parseInt(foodQuantity1);
        const updateFood = {
            url,
            foodName,
            foodCategory,
            foodPrice,
            foodQuantity,
            about,
        };
        // api call
        axios.put(`/update?id=${id}`, updateFood).then((res) => {
            if (res.data.acknowledged) {
                toast.success("Successfully updated!");
                navigate("/my-food-item");
            }
        });
        e.target.reset();
    };
    // handle delete modal
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
    });
    // handle delete
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

                    // api call
                    axios.delete(`/delete?id=${id}&db=foodDB`).then((res) => {
                        if (res.status === 200) {
                            navigate("/my-food-item");
                            toast.success("Successfully deleted!");
                        }
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
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
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | Update</title>
            </Helmet>

            {/* banner for title */}
            <Title title={`Update`} />

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 items-center border border-[#cd9232bb] rounded-xl p-5 md:p-10 animate__animated animate__fadeInUp">
                    <div className="w-full mb-5 md:mb-0 animate__animated animate__fadeInLeft animate__delay-1s">
                        <h3 className="text-center mb-5">Preview</h3>
                        <div className="border rounded-xl border-[#cd9232bb] bg-white p-5 w-full">
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
                                    <i>$ {foodPrice1}</i>
                                </h3>

                                <h5 className="mb-2">
                                    Quantity:{" "}
                                    <span className="text-[#cd9232bb] font-bold">
                                        {foodQuantity1}
                                    </span>
                                </h5>

                                <p className="mb-5">{about}</p>
                                <hr />
                                <div className="text-right">
                                    <button
                                        className="border border-[#cd9232bb] py-2 px-4 rounded-lg hover:bg-[#cd9232bb] hover:text-white font-bold transition-all"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="col-span-2 animate__animated animate__fadeInRight animate__delay-1s"
                    >
                        <div className="mb-5">
                            <label htmlFor="Food Image">Food Image</label>
                            <input
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food image URL"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setUrl(e.target.value)}
                                defaultValue={url}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Name">Food Name</label>
                            <input
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodName(e.target.value)}
                                defaultValue={foodName}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Category">Food Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Food category"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodCategory(e.target.value)
                                }
                                defaultValue={foodCategory}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Quantity">Food Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Food quantity"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodQuantity(e.target.value)
                                }
                                defaultValue={foodQuantity1}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Price">Food Price</label>
                            <input
                                type="number"
                                name="price"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodPrice(e.target.value)}
                                defaultValue={foodPrice1}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="About">About Food</label>
                            <textarea
                                type="text"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                onChange={(e) => setAbout(e.target.value)}
                                defaultValue={about}
                            />
                        </div>

                        <button
                            type="submit"
                            className="border border-[#cd9232bb] py-2 w-full rounded-lg text-lg hover:bg-[#cd9232bb] hover:text-white font-bold transition-all"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
            {isPending && (
                <div className="flex items-center justify-center mt-5 md:mt-10">
                    <Loader size="lg" content="Loading" className="font-bold" />
                </div>
            )}
        </div>
    );
}

export default UpdateItem;
