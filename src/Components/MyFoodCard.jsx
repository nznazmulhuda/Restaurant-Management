function MyFoodCard() {
    return (
        <div>
            <div className="flex items-center gap-5 md:gap-10 p-4 border rounded-xl shadow-lg">
                <div className="w-32 md:w-36">
                    <img className="w-full h-full" src="/logo.jpg" alt="" />
                </div>

                <div className="flex items-center justify-between w-full">
                    <div>
                        <h4>Burgger</h4>
                        <h3>
                            <i>$55.20</i>
                        </h3>
                    </div>

                    <button className="border py-2 px-4 rounded-lg text-lg font-bold border-orange-600 hover:bg-orange-600 hover:text-white transition-all mr-5">
                        Update
                    </button>
                </div>
            </div>
            ;
        </div>
    );
}

export default MyFoodCard;
