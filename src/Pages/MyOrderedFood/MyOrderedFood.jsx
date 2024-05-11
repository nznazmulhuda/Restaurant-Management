import MyOrderedCard from "../../Components/MyOrderedCard";
import Title from "../../Components/Title";

function MyOrderedFood() {
    return (
        <div>
            <Title title={"Foods are you added"} />

            <div className="container mx-auto mt-10">
                <MyOrderedCard />
                <MyOrderedCard />
                <MyOrderedCard />
                <MyOrderedCard />
            </div>
        </div>
    );
}

export default MyOrderedFood;
