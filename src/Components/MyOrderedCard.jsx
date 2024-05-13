import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

function MyOrderedCard({ food, refetch }) {
    const { foodName, price, time, authorName, _id, url } = food;
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
                    axios
                        .delete(`/delete?id=${_id}&db=purchaseDB`)
                        .then(() => refetch());
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
        <div className="animate__animated animate__fadeInUp">
            <div className="flex  items-center gap-5 md:gap-10 p-4 border rounded-xl shadow-lg">
                <div className="w-32 md:w-36">
                    <img className="w-full h-full" src={url} alt="" />
                </div>

                <div className="flex flex-wrap items-center justify-between w-full">
                    <div>
                        <h4 className="text-sm md:text-2xl">{foodName}</h4>
                        <h3 className="text-sm md:text-2xl">
                            <i>{price}</i>
                        </h3>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-2xl">
                            {time.split(",")[1]}
                        </h4>
                        <h3 className="text-sm md:text-2xl">
                            <i>{authorName}</i>
                        </h3>
                    </div>

                    <div>
                        <button
                            className="border py-2 px-4 rounded-lg text-lg font-bold border-green-600 hover:bg-green-600 hover:text-white transition-all mr-5 text-black"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

MyOrderedCard.propTypes = {
    food: PropTypes.object,
    refetch: PropTypes.func,
};

export default MyOrderedCard;
