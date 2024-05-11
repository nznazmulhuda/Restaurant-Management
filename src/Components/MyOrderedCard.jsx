import Swal from "sweetalert2";

function MyOrderedCard() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
    });
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
            <div className="flex  items-center gap-5 md:gap-10 p-4 border rounded-xl shadow-lg">
                <div className="w-32 md:w-36">
                    <img className="w-full h-full" src="/logo.jpg" alt="" />
                </div>

                <div className="flex flex-wrap items-center justify-between w-full">
                    <div>
                        <h4 className="text-sm md:text-2xl">Burgger</h4>
                        <h3 className="text-sm md:text-2xl">
                            <i>$55.20</i>
                        </h3>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-2xl">Added time</h4>
                        <h3 className="text-sm md:text-2xl">
                            <i>Food Owner</i>
                        </h3>
                    </div>

                    <div>
                        <button
                            className="border py-2 px-4 rounded-lg text-lg font-bold border-orange-600 hover:bg-orange-600 hover:text-white transition-all mr-5 text-black"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
}

export default MyOrderedCard;
