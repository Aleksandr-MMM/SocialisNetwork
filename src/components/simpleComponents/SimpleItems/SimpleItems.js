import style from './SimpleItems.module.css'

export const SimpleItems =({items})=>{

    return(<>
            {Array.isArray(items)
                ?items?.map(item=><p key={item} className={style.item}>{item}</p>)
                :<p className={style.item}>{items}</p>}
    </>

    )
}