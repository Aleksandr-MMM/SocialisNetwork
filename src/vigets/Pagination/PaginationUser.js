import { Pagination } from 'antd';
import {setCurrentPage} from "../../store/reducers/settingsReduser";
import {useSelector} from "react-redux";


const PaginationUser = ({dispatch}) => {
    const totalCount = useSelector((state) => state.getUsers.helpersToUsersData.totalCount)
    return(
        <div>
            <Pagination  onChange={(e)=> {
                dispatch(setCurrentPage(e))}
            } defaultCurrent={1} total={totalCount}/>
        </div>

    )
}
export default PaginationUser;