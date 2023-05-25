import style from './logout.module.css';

export const Logout = (props) => {
    // Чистая компонента для выхода из аккаунта

    return (
        <div>
            <p className={style.logout} onClick={async () => {
                await props.logoutToAccount()
            }}>
                Разлогиниться
            </p>
        </div>
    )
}