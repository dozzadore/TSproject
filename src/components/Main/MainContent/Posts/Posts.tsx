import style from "./posts.module.css";


interface Props {
    message: string;
}

function Posts({message}: Props) {



    return (
        <div className={ style.posts }>
            {message}
        </div>
    )
}

export default Posts;