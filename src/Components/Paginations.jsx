import PropTypes from "prop-types";
import { Pagination } from "rsuite";

function Paginations({ total, setActivePage, activePage }) {
    return (
        <>
            <Pagination
                prev
                last
                next
                first
                size="lg"
                total={total}
                limit={9}
                activePage={activePage}
                onChangePage={setActivePage}
            />
        </>
    );
}

Paginations.propTypes = {
    total: PropTypes.number,
    setActivePage: PropTypes.func,
    activePage: PropTypes.number,
};

export default Paginations;
