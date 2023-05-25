import {useSelector} from "react-redux";
import {getAllUsers} from "../../../../store/reducers/usersReduser";
import {useEffect} from "react";
import UsersPage from "./UsersPage";


const UsersPageContainer = ({dispatch}) => {



    const pageData = useSelector((state) => state.settingsReducer.usersSettings)

    // Поиск пользователей на странице

    useEffect(() => {
        dispatch(getAllUsers({
            currentPage:pageData.currentPage,
            pageSize:pageData.pageSize
        }))},[dispatch,pageData.currentPage,pageData.pageSize])

        return (<>
                <UsersPage dispatch={dispatch} />
        </>
        )
}
export default UsersPageContainer