import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Saludar } from "./Class-Saludar";
import { TaskCard } from "./Task";
import { Post } from "./Posts";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Siempre debe haber un elemento que contenga al resto, por eso los div's

const handlerChange = (e) => {
    console.log(e.target.value + " ...")
}

root.render(
    <>

        <Post />

        {/* <TaskCard ready={true} />
        <Saludar /> */}

        {/* <input id="hi" onChange={handlerChange}></input> */}
        {/* <input id="hi" onDoubleClick={handlerChange}></input> */}
        {/* <Button text="Send" /> */}

        {/* <form onSubmit={(e) => {
            e.preventDefault()
            alert("Sent")
        }}>
            <h1>Sign Up</h1>
            <button>Send</button>
        </form> */}
    </>
);