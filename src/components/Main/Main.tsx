
import MainContent from "./MainContent/MainContent";
import NavBar from "./NavBar/NavBar";
import style from "./main.module.css";


function Main() {

    return (
        <div className={ style.main }>
            <MainContent />
        </div>
    )
}

export default Main;