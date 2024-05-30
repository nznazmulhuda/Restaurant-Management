import axios from "axios";
import { Loader } from "rsuite";
import { useState } from "react";
import { Link } from "react-router-dom";
import chef from "../../assets/chef.avif";
import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import TopFood from "../../Components/TopFood";
import { HiOutlineMail } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import EventBanner from "../../Components/EventBanner";

function Home() {
    const [datas, setDatas] = useState([]);
    // get data
    const { isPending } = useQuery({
        queryKey: ["nahid"],
        queryFn: () =>
            axios.get("/top-food").then((res) => {
                if (res) {
                    setDatas(res.data);
                }
                return res.data;
            }),
    });
    return (
        <div className="container mx-auto">
            {/* page title */}
            <Helmet>
                <title>Dish Dash | Home</title>
            </Helmet>

            {/* banner section */}
            <Banner />

            <div>
                <h1 className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5 text-black animate__animated animate__fadeInDown animate__delay-1s">
                    Top Foods
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    {datas.map((topFood) => (
                        <TopFood key={topFood._id} data={topFood} />
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

                {
                    <Link to={"/foods"}>
                        <div className="text-center mt-5">
                            <button className="border py-2 px-5 border-[#cd9232bb] rounded-lg hover:bg-[#cd9232bb] hover:text-white font-bold transition-all text-black">
                                Show all
                            </button>
                        </div>
                    </Link>
                }
            </div>

            <div className="mt-10">
                <div
                    className="flex items-center justify-between flex-col-reverse md:flex-row gap-3 border px-4 md:px-20 py-3 md:py-5 rounded-xl border-[#cd9232bb] shadow-lg text-black"
                    data-aos="fade-down"
                >
                    <div className="md:w-1/2" data-aos="fade-right">
                        <h1 className="text-xl font-bold">OUR MISSION</h1>
                        <h1 className="text-2xl font-bold mt-3 mb-2">
                            Chefs team
                        </h1>
                        <p className="leading-7 text-[12px]">
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

                    <div
                        className="flex items-center justify-center md:justify-end w-full md:w-1/2 h-[35vh]"
                        data-aos="fade-left"
                    >
                        <img
                            className="w-[70%] h-full rounded-lg"
                            src={chef}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <h1
                className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5"
                data-aos="fade-down"
            >
                Upcoming Events
            </h1>

            <div className="mt-10">
                <EventBanner />
            </div>

            <h1
                className="mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5"
                data-aos="fade-down"
            >
                Contact Information
            </h1>

            <div
                className="grid grid-cols-1 md:grid-cols-2 w-full items-center border border-[#cd9232bb] rounded-xl px-10 md:px-20 py-10 shadow-lg text-black"
                data-aos="fade-down"
            >
                <div
                    className="flex flex-col items-center md:items-start"
                    data-aos="fade-right"
                >
                    <div className="flex flex-col items-center justify-center w-32 md:w-36 h-32 md:h-36 border rounded-full bg-[#cd9232bb] text-white font-bold">
                        <h1 className="text-2xl md:text-3xl">40%</h1>
                        <h5 className="text-center text-sm px-4">
                            BUSINESS LAUNCH
                        </h5>
                    </div>

                    <h1 className="text-2xl font-bold mt-4 mb-2">
                        Our Contact
                    </h1>

                    <button className="border border-[#cd9232bb] py-2 px-4 rounded-lg mt-2 hover:bg-[#cd9232bb] hover:text-white font-bold transition-all">
                        Read More
                    </button>
                </div>

                <div className="mt-2 md:mt-0" data-aos="fade-left">
                    <div className="flex items-center gap-4">
                        <div className="border p-2 md:p-3 rounded-full bg-[#cd9232bb] text-white">
                            <HiOutlineMail className="text-2xl md:text-3xl" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold mb-2">
                                Chat to us
                            </h1>
                            <h3 className="text-sm">
                                Our friendly team is here to help
                            </h3>
                            <p className="text-[#cd9232bb] cursor-pointer">
                                dish@dash.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                        <div className="border p-2 md:p-3 rounded-full bg-[#cd9232bb] text-white">
                            <HiOutlineMail className="text-2xl md:text-3xl" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold mb-2">Office</h1>
                            <h3 className="text-sm">
                                Come say hello at our office HQ.
                            </h3>
                            <p className="text-[#cd9232bb] cursor-pointer">
                                121 Rock Street, 21 Avenue, <br /> New York, NY
                                92103-9000
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                        <div className="border p-2 md:p-3 rounded-full bg-[#cd9232bb] text-white">
                            <HiOutlineMail className="text-2xl md:text-3xl" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold mb-2">Phone</h1>
                            <h3 className="text-sm">
                                Mon - Fri from 8am to 5am
                            </h3>
                            <p className="text-[#cd9232bb] cursor-pointer">
                                +1(555) 000-000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
