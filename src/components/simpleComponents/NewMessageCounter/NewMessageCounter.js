
export const NewMessageCounter =(props)=>{
    return(<div>
        {`У вас: ${props.newMessageCount>0?props.newMessageCount:'нет'} новых сообщений`}
    </div>)
}