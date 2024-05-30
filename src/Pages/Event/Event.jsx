import EventImage from "../../assets/event.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Event() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const eventData = { name, email, phone, address };

        axios
            .post("/events", eventData)
            .then((res) => {
                if (res.data.acknowledged) {
                    toast.success("Success registration!");
                    navigate("/");
                }
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                form.reset();
            });
    };

    return (
        <>
            <div>
                <h1 className="text-center mb-10">Register your seat</h1>

                <div className="flex justify-between items-center w-full container mx-auto px-10 gap-4 flex-col md:flex-row">
                    <form
                        className="border-2 rounded-xl p-5 flex-grow"
                        onSubmit={handleSubmit}
                    >
                        <div className="container mx-auto flex flex-col gap-4">
                            <input
                                className="outline-none py-2 px-3 rounded-md bg-transparent border"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                className="outline-none py-2 px-3 rounded-md bg-transparent border"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <input
                                className="outline-none py-2 px-3 rounded-md bg-transparent border"
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                required
                            />
                            <input
                                className="outline-none py-2 px-3 rounded-md bg-transparent border"
                                type="text"
                                placeholder="Address"
                                name="address"
                                required
                            />
                            <button
                                type="submit"
                                className="py-2 px-3 rounded-md bg-transparent border"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div>
                        <img
                            className="h-[50vh] md:pr-10"
                            src={EventImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;
