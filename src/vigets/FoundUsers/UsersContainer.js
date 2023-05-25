import Users from "./Users";
import { useSelector} from "react-redux";

const UsersContainer = ({dispatch}) => {


    const customEqual = (oldValue, newValue) => {

       return  oldValue.length === newValue.length&&oldValue[0]?.id===newValue[0]?.id
    }

    const users = useSelector((state) => state.getUsers.items,customEqual)

    return (<>
            <Users dispatch={dispatch} users={users} />
        </>
    )
}
export default UsersContainer