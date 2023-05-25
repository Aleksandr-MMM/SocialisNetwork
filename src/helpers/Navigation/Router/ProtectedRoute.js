import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children,isLoggedIn }) => {

    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};