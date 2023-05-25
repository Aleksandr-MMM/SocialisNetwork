import UsersContainer from "../../../../vigets/FoundUsers/UsersContainer";
import PaginationUser from "../../../../vigets/Pagination/PaginationUser";

const UsersPage = ({dispatch}) => {

        return (<>
                <UsersContainer  dispatch={dispatch} />
                <PaginationUser dispatch={dispatch}/>
        </>
        )
}
export default UsersPage