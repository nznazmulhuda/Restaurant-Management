import { Helmet } from "react-helmet-async";
import TopFood from "../../Components/TopFood";
import { Link } from "react-router-dom";
// import Banner from "../../Components/Banner";

function Home() {
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Dish Dish | Home</title>
            </Helmet>

            {/* <Banner /> */}

            <div>
                <h1 className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5">
                    Top Foods
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    {data.slice(0, 6).map((topFood) => (
                        <TopFood key={topFood} data={topFood} />
                    ))}
                </div>

                {data.length > 6 && (
                    <Link to={"/foods"}>
                        <div className="text-center mt-5">
                            <button className="border py-2 px-5 border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white font-bold transition-all">
                                Show all
                            </button>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Home;
