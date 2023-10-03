
import MainContent from "./MainContent/MainContent";
import style from "./main.module.css";
import User from "../Laypuot/User/User";


function Main() {

    return (
        <div className={ style.main }>
            <User />
            <MainContent />
        </div>
    )
}

export default Main;