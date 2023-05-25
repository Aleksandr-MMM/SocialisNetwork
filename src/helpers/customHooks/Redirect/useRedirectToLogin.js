import {useNavigate} from "react-router-dom";


export const useRedirectToLogin = (isLogin) => {
    const navigate = useNavigate();
    debugger
  /*  useEffect(() => {
            if (!isLogin) {
                navigate("/login")
            }
        }, [navigate,isLogin]
    )
}*/

            if (!isLogin) {
                navigate('../login',{ replace: true })

            }

}
