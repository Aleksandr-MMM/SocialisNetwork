import React from "react";
import style from './Article.module.css'
import {UserRouter} from "../../../helpers/Navigation/Router/Router";


const Article = ({isLogin,currentUserId,dispatch}) => {
        return (
            <article className={`${style.wrapper}`}>
                    <UserRouter isLogin={isLogin} currentUserId={currentUserId} dispatch={dispatch}/>
            </article>
        )
}

export default Article;
