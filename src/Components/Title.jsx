import PropTypes from "prop-types";
import styles from "./Title.module.css";

function Title({ title }) {
    return (
        <>
            <div className="relative">
                <div className={`${styles.title}`}></div>

                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl md:text-4xl text-center">
                    {title}
                </h1>
            </div>
        </>
    );
}
Title.propTypes = {
    title: PropTypes.string,
};
export default Title;
