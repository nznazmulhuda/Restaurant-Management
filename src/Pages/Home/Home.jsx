import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";

function Home() {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Dish Dish | Home</title>
            </Helmet>

            <Banner />
        </div>
    );
}

export default Home;
