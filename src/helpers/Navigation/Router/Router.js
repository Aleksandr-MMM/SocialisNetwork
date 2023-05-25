import CurrentProfileContainer
    from "../../../components/DetailPageComponents/MainPageContent/CurrentProfile/CurrentProfileContainer";
import {useRoutes} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute";
import {RedirectToRoute} from "./RedirectToRoute";
import {
    MassagePageContainer
} from "../../../components/DetailPageComponents/MainPageContent/MassagePage/MassagePageContainer";
import {
    DialogsPageContainer
} from "../../../components/DetailPageComponents/MainPageContent/DialogsPage/DialogsPageContainer";
import {
    RegistrationPageContainer
} from "../../../components/DetailPageComponents/MainPageContent/Login/RegistrationPageContainer";

import {
    SettingPageContainer
} from "../../../components/DetailPageComponents/MainPageContent/SettingsPage/SettingPageContainer";
import UsersPageContainer from "../../../components/DetailPageComponents/MainPageContent/UsersPage/UsersPageContainer";
import {AboutWeb} from "../../../components/DetailPageComponents/MainPageContent/AboutWeb/AboutWeb";


export const UserRouter = ({currentUserId, isLogin,dispatch}) => {

    const path = `/profile/${currentUserId}`

    const router = useRoutes([
        {
            path: '/profile/:id',
            element: <ProtectedRoute isLoggedIn={isLogin}>
                <CurrentProfileContainer dispatch={dispatch}/>
            </ProtectedRoute>
        },
        {
            path: '/message/:id',
            element: <ProtectedRoute isLoggedIn={isLogin}>
                <MassagePageContainer/>
            </ProtectedRoute>
        },
        {
            path: '/dialogs',
            element: <ProtectedRoute isLoggedIn={isLogin}>
                <DialogsPageContainer/>
            </ProtectedRoute>
        },
        {
            path: '/login',
            element: <RedirectToRoute isLoggedIn={isLogin} path={path}>
                <RegistrationPageContainer dispatch={dispatch}/>
            </RedirectToRoute>

        },
        {
            path: '/users',
            element: <ProtectedRoute isLoggedIn={isLogin}>
                <UsersPageContainer dispatch={dispatch}/>
            </ProtectedRoute>

        },
        {
            path: '*',
            element:
                <AboutWeb/>
        },
        {
            path: '/settings',
            element: <ProtectedRoute isLoggedIn={isLogin}>
                <SettingPageContainer/>
            </ProtectedRoute>
        },
    ])
    return (
        router
    )
}

