export const UserActivity =({id,lastDialogActivityDate,lastUserActivityDate})=>{
    return(<>
        <div>
            Посследнее собщение :
            {lastDialogActivityDate}
        </div>
        <div>
            Последний раз в сети :
            {lastUserActivityDate}
        </div>
    </>)
}