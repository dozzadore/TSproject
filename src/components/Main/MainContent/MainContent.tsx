import Posts from "./Posts/Posts";
import style from "./maincontent.module.css";


interface Props {}

function MainContent(props: Props) {

    return (
        <div className={ style.mainContent }>
            <Posts message="hey1"/>
            <Posts message='hi'/>
            <Posts message='hee'/>
            <Posts message="hey"/>
            <Posts message='hi'/>
            <Posts message='hee'/>
            <Posts message="hey"/>
            <Posts message='hi'/>
            <Posts message='hee'/>
            <Posts message="hey"/>
            <Posts message='hi'/>
            <Posts message='hee'/>
        </div>
    )
}

export default MainContent;