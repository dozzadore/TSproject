import { Link } from "@mui/material";
import style from "./navbar.module.css";


function NavBar() {

    return (
        <div className={ style.navBar }>
            <Link className={style.alink}>Моя страница</Link>
            <Link className={style.alink}>Новости</Link>
            <Link className={style.alink}>Мессенджер</Link>
            <Link className={style.alink}>Сообщества</Link>
        </div>
    )
}

export default NavBar;