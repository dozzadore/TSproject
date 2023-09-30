
import MainContent from "./MainContent/MainContent";
import NavBar from "./NavBar/NavBar";
import style from "./main.module.css";


function Main() {

    return (
        <div className={ style.main }>
            <NavBar />
            <MainContent />
        </div>
    )
}

export default Main;