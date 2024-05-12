import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

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
