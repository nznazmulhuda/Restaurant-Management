import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

function TanstackQuery({ children }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>
    );
}

TanstackQuery.propTypes = {
    children: PropTypes.node,
};

export default TanstackQuery;
