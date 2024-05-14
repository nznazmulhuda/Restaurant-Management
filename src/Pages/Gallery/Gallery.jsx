import axios from "axios";
import { Loader, Modal } from "rsuite";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { RiAddLargeFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import GalleryCard from "../../Components/GalleryCard";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Gallery() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [size, setSize] = useState();
    const [open, setOpen] = useState(false);
    const [gallerys, setGallerys] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [fetching, setFetching] = useState(false);

    // get all gallery data
    const { isPending, refetch } = useQuery({
        queryKey: ["image", "page"],
        queryFn: async () =>
            axios.get(`/gallery?page=${page}`).then((res) => {
                if (!res.data.success) {
                    if (isFetchingMore) {
                        setGallerys([...gallerys, ...res.data]);
                        return setFetching(false);
                    }
                    setGallerys(res.data);
                    return res.data;
                }
                setFetching(false);
            }),
    });
    // handle scroll
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setPage(page + 1);
            setIsFetchingMore(true);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        refetch();
    }, [isFetchingMore, refetch]);
    // handle modal
    const handleOpen = (value) => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    // handle add gallery card's modal
    const handleAddGalleryCard = () => {
        if (!user) {
            return navigate("/login", { state: pathname });
        }
        return handleOpen(400);
    };
    // handle add gallery card
    const addGalleryCard = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imageUrl = e.target.imageUrl.value;
        const feedback = e.target.feedback.value;
        const data = { name, imageUrl, feedback };

        // store gallery data on the database
        axios.post("/gallery", data).then((res) => {
            if (res.data.insertedId) {
                toast.success("Added success!");
                refetch();
            }
        });

        handleClose();
        e.target.reset();
    };

    return (
        <div className="mb-64">
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | Gallery</title>
            </Helmet>

            {/* Banner for title */}
            <Title title={"Gallery"} />

            {/* Gallery card's data input field */}
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
                                className="outline-none border-b-2 border-green-600 rounded-lg px-3 py-2 w-full cursor-not-allowed"
                                value={user?.displayName}
                                disabled
                            />
                        </div>

                        <div className="w-full mb-6">
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="Image URL"
                                className="outline-none border-b-2 border-green-600 rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                type="text"
                                name="feedback"
                                placeholder="Your feedback"
                                className="outline-none border-b-2 border-green-600 rounded-lg px-3 py-2 w-full resize-none"
                                required
                            />
                        </div>

                        <div className="text-right mt-5">
                            <button className="border py-2 px-4 rounded-lg border-green-600 font-bold text-black hover:bg-green-600 hover:text-white transition-all">
                                Add
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-10 container mx-auto">
                <div
                    className="h-[30vh] border flex items-center justify-center text-7xl text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
                    title="Add"
                    onClick={handleAddGalleryCard}
                >
                    <RiAddLargeFill />
                </div>
                {gallerys?.map((gallery) => (
                    <GalleryCard key={gallery._id} gallery={gallery} />
                ))}
                {isPending && (
                    <div className="flex items-center justify-center mt-5 md:mt-10">
                        <Loader
                            size="lg"
                            content="Loading"
                            className="font-bold"
                        />
                    </div>
                )}
            </div>
            {fetching && (
                <div className="flex items-center justify-center mt-5 md:mt-10">
                    <Loader
                        size="lg"
                        content="Fetching"
                        className="font-bold"
                    />
                </div>
            )}
        </div>
    );
}

export default Gallery;
