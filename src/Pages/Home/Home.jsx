import { Helmet } from "react-helmet-async";
import TopFood from "../../Components/TopFood";
import { Link } from "react-router-dom";
import Chef from "../../Components/Chef";
import Banner from "../../Components/Banner";

function Home() {
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Dish Dish | Home</title>
            </Helmet>

            {/* <Banner />

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
            </div> */}

            {/* <div>
                <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-3 border px-4 md:px-20 py-3 md:py-5 rounded-xl border-orange-600 shadow-lg">
                    <div className="md:w-1/2">
                        <h1 className="text-xl font-bold">OUR MISSION</h1>
                        <h1 className="text-2xl font-bold mt-3 mb-2">
                            Chefs team
                        </h1>
                        <p className="leading-7">
                            At Dish Dash, we are privileged to have a team of
                            culinary artisans who bring creativity, skill, and
                            dedication to every dish they create. Led by our
                            Executive Chef, Elena Rodriguez, whose culinary
                            mastery and innovative flair set the tone for our
                            kitchen, our team is committed to delivering
                            exceptional dining experiences. With Michael Chang,
                            our Sous Chef, overseeing the meticulous execution
                            of each recipe and ensuring that every plate
                            reflects our commitment to quality and taste. Our
                            Pastry Chef, Sophie Dubois, delights diners with
                            delectable desserts and sweet treats that are as
                            beautiful as they are delicious, while our Head
                            Chef, Alejandro Martinez, orchestrates the
                            harmonious collaboration of flavors and textures
                            that define our culinary identity. Together, our
                            chefs blend passion, expertise, and a deep respect
                            for ingredients to create unforgettable dining
                            moments for our guests.
                        </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-end w-full md:w-1/2 h-[35vh]">
                        <img
                            className="w-[70%] h-full rounded-lg"
                            src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208288.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home;
