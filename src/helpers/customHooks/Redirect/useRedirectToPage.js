import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useRedirectToPage = (isRedirect,page) => {
    const navigate = useNavigate();
    useEffect(() => {
            if (!isRedirect) {
                navigate(page)
            }
        }, [navigate,isRedirect,page]
    )
}