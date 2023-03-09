import { MdGetApp } from "react-icons/md";

export const Post = () => {
    return <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>
        Give me the data <MdGetApp />
    </button>
}