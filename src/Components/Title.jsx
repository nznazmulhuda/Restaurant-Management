import PropTypes from "prop-types";
import styles from "./Title.module.css";

function Title({ title }) {
    return (
        <>
            <div className="relative w-full h-full">
                <div
                    className={`${styles.title} animate__animated animate__fadeIn`}
                ></div>

                <div className="w-full h-full absolute top-0 flex items-center justify-center">
                    <h1 className="text-white font-bold text-2xl md:text-4xl text-center animate__animated animate__fadeInDown animate__delay-1s">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    );
}
Title.propTypes = {
    title: PropTypes.string,
};
export default Title;
