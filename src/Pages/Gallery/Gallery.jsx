import { useState } from "react";
import GalleryCard from "../../Components/GalleryCard";
import Title from "../../Components/Title";
import { RiAddLargeFill } from "react-icons/ri";
import { Modal } from "rsuite";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

function Gallery() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const handleOpen = (value) => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleAddGalleryCard = () => {
        if (!user) {
            return navigate("/login", { state: pathname });
        }
        return handleOpen(400);
    };
    const addGalleryCard = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imageUrl = e.target.imageUrl.value;
        const feedback = e.target.feedback.value;

        console.log({ name, imageUrl, feedback });

        // api call

        handleClose();
        e.target.reset();
    };

    return (
        <div>
            <Title title={"Gallery"} />

            <Modal size={size} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add new card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addGalleryCard}>
                        <div className="w-full mb-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="outline-none border-b-2 border-orange-600 rounded-lg px-3 py-2 w-full cursor-not-allowed"
                                value={"Nazmul Huda Nahid"}
                                disabled
                            />
                        </div>

                        <div className="w-full mb-6">
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="Image URL"
                                className="outline-none border-b-2 border-orange-600 rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                type="text"
                                name="feedback"
                                placeholder="Your feedback"
                                className="outline-none border-b-2 border-orange-600 rounded-lg px-3 py-2 w-full resize-none"
                                required
                            />
                        </div>

                        <div className="text-right mt-5">
                            <button className="border py-2 px-4 rounded-lg border-orange-600 font-bold text-black hover:bg-orange-600 hover:text-white transition-all">
                                Add
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-10 container mx-auto">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />

                <div
                    className="h-[30vh] border flex items-center justify-center text-7xl text-gray-500 rounded-lg cursor-pointer"
                    title="Add"
                    onClick={handleAddGalleryCard}
                >
                    <RiAddLargeFill />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
