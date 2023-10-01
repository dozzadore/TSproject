
import MainContent from "./MainContent/MainContent";
import User from "./User/User";
import style from "./main.module.css";


function Main() {

    return (
        <div className={ style.main }>
            <User />
            <MainContent />
        </div>
    )
}

export default Main;