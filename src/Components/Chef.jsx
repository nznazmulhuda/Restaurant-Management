import style from "./Chef.module.css";
import { PiChefHatDuotone } from "react-icons/pi";

export const ChefCard = ({ chef }) => {
    const { name, profession, img } = chef;
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="border rounded-full w-22 md:w-24 h-22 md:h-24 border-orange-600">
                    <img
                        className="w-20 md:w-24 rounded-full h-20 md:h-24 mb-2"
                        src={img}
                        alt=""
                    />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white">
                    {name}
                </h1>
                <h1 className="text-lg md:text-xl font-semibold flex items-center gap-1">
                    <PiChefHatDuotone className="text-xl md:text-2xl text-white font-bold" />
                    {profession}
                </h1>
            </div>
        </div>
    );
};

function Chef() {
    const chefs = [
        {
            name: "Elena Rodriguez",
            profession: "Executive Chef",
            img: "https://foodie.sysco.com/wp-content/uploads/2019/07/MarcusMeansChefProfile_800x850.jpg",
        },
        {
            name: "Michael Chang",
            profession: "Sous Chef",
            img: "https://chefin.com.au/wp-content/uploads/2021/02/chef-hemant-dadlani-profile-1-833x1024.jpg",
        },
        {
            name: "Sophie Dubois",
            profession: "Pastry Chef",
            img: "https://chefin.com/wp-content/uploads/2021/10/a-professional-chef-portrait-e1641537274864.jpg",
        },
        {
            name: "Alejandro Martinez",
            profession: "Head Chef",
            img: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg&fm=jpg",
        },
    ];

    return (
        <div className="relative">
            <div className={`${style.chef}`}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 px-0 md:px-10 w-full">
                {chefs.map((chef, id) => (
                    <ChefCard chef={chef} key={id} />
                ))}
            </div>
        </div>
    );
}

export default Chef;
