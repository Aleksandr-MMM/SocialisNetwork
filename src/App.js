import style from './App.module.css'
import Article from "./components/DetailPageComponents/article/Article";
import Footer from "./components/DetailPageComponents/footer/Footer";
import Navbar from "./components/DetailPageComponents/navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {identifyMe} from "./store/reducers/globalData";
import HeaderContainer from "./components/DetailPageComponents/header/HeaderContainer";
import preloader from './assets/svg/preloader.svg'
import { useEffect} from "react";
import {setPageSize} from "./store/reducers/settingsReduser";

function App() {

    const dispatch = useDispatch()
    useEffect(()=>{dispatch(identifyMe())},[dispatch])
    const currentUser =useSelector((state)=>state.globalData)

    useEffect(()=>{
        const pageSizeItem = localStorage.getItem('pageSize')
        if(pageSizeItem){
            dispatch(setPageSize(pageSizeItem))
        }
    },[dispatch])

    if(currentUser.isToggle){
        return (
            <div className={style.wrapperPreloader}>
                <img src={preloader} alt="preloader" className={style.preloader}/>
            </div>
        );
    }
    else {
        return (
            <div className={style.App}>
                <HeaderContainer/>
                <div className={style.mainContentWrapper}>
                    <Navbar currentUserId={currentUser.userRoot.id}/>
                    <Article isLogin={currentUser.isLogin} currentUserId={currentUser.userRoot.id} dispatch={dispatch}/>
                </div>
                    <Footer/>


            </div>

        )
    }
}

export default App;
