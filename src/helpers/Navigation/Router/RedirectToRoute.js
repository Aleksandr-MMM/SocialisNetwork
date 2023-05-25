import { Navigate } from "react-router-dom";
export const RedirectToRoute = ({ children,isLoggedIn,path }) => {
    if (isLoggedIn) {
        return <Navigate to={path} replace/>;
    }
    return children;
};